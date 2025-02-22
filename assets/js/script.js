import { auth, db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { signInUser, signOutUser, monitorAuthState } from "./auth.js";

// Attach Event Listeners
document
  .getElementById("googleSignInBtn")
  .addEventListener("click", signInUser);
document
  .getElementById("googleSignOutBtn")
  .addEventListener("click", signOutUser);

// Get transactions collection
const transactionsCollection = collection(db, "transactions");

// Initialize Transactions Array
export let transactions = [];

// DOM Elements
const list = document.getElementById("transactionList");
const form = document.getElementById("transactionForm");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const dateInput = document.getElementById("date");

// Set default date
dateInput.defaultValue = new Date().toISOString().split("T")[0];

// Currency Formatter
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  signDisplay: "always",
});

// Load Transactions from Firestore
async function loadTransactions(user) {
  if (!user) return;

  transactions = [];

  const q = query(transactionsCollection, where("userId", "==", user.uid));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    transactions.push({ id: doc.id, ...doc.data() });
  });

  renderList();
  updateTotal();
  renderMonthlyView();
}

// Render monthly view
function renderMonthlyView() {
  const monthlyContainer = document.getElementById("monthly-view-container");
  monthlyContainer.innerHTML = "";

  const monthlyData = {};
  transactions.forEach(({ date, amount, name, type }) => {
    const transactionDate = new Date(date);
    const monthKey = `${transactionDate.getFullYear()}-${(
      transactionDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;

    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }

    monthlyData[monthKey].push({
      name,
      amount,
      type,
      date: transactionDate.toDateString(),
    });
  });

  Object.entries(monthlyData).forEach(([month, transactions]) => {
    const monthDiv = document.createElement("div");
    monthDiv.classList.add("month-view");

    const monthHeader = document.createElement("h4");
    monthHeader.textContent = `${month}`;
    monthDiv.appendChild(monthHeader);

    const transactionsList = document.createElement("ul");
    transactions.forEach(({ name, amount, type, date }) => {
      const sign = type === "income" ? 1 : -1;
      const transactionItem = document.createElement("li");
      transactionItem.classList.add("transaction-item");
      transactionItem.classList.add("amount");
      transactionItem.classList.add(`${type}`);
      transactionItem.innerHTML = `<strong style='color: black'>${name}:</strong>  ${formatCurrency(
        amount * sign
      )} ${date}`;
      transactionsList.appendChild(transactionItem);
    });

    monthDiv.appendChild(transactionsList);
    monthlyContainer.appendChild(monthDiv);
  });
}

// Clear transactions when user signs out
function clearTransactions() {
  transactions.length = 0;
  document.getElementById("transactionList").innerHTML = "";
  document.getElementById("balance").textContent = "$0.00";
  document.getElementById("income").textContent = "$0.00";
  document.getElementById("expense").textContent = "$0.00";
  document.getElementById("monthly-view-container").innerHTML = "";
}

export { loadTransactions };

document.addEventListener("DOMContentLoaded", () => {
  monitorAuthState((user) => {
    if (user) {
      loadTransactions(user);
    } else {
      clearTransactions();
    }
  });
});

// Format Currency
function formatCurrency(value) {
  return value === 0
    ? formatter.format(0).replace(/^[+-]/, "")
    : formatter.format(value);
}

// Create Transaction Item
function createItem({ id, name, amount, date, type }) {
  const sign = type === "income" ? 1 : -1;
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="name">
      <h4>${name}</h4>
      <p>${new Date(date).toLocaleDateString()}</p>
    </div>
    <div class="amount ${type}">
      <span>${formatCurrency(amount * sign)}</span>
    </div>
  `;

  li.addEventListener("click", async () => {
    if (confirm("Delete transaction?")) {
      await deleteTransaction(id);
      renderMonthlyView();
    }
  });

  renderMonthlyView();
  return li;
}

// Update Balance
function updateTotal() {
  const incomeTotal = transactions
    .filter((trx) => trx.type === "income")
    .reduce((total, trx) => total + trx.amount, 0);

  const expenseTotal = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((total, trx) => total + trx.amount, 0);

  const balanceTotal = incomeTotal - expenseTotal;

  balance.textContent = formatCurrency(balanceTotal).replace(/^\+/, "");
  income.textContent = formatCurrency(incomeTotal);
  expense.textContent = formatCurrency(expenseTotal * -1);
}

// Render List
function renderList() {
  list.innerHTML = "";
  transactions.forEach((transaction) => {
    const li = createItem(transaction);
    list.appendChild(li);
  });
}

// Delete Transaction
async function deleteTransaction(id) {
  await deleteDoc(doc(db, "transactions", id));
  transactions.splice(
    transactions.findIndex((trx) => trx.id === id),
    1
  );

  renderList();
  updateTotal();
}

// Add Transaction
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  form.reset();

  const user = auth.currentUser;

  if (!user) {
    alert("You must be logged in to add a transaction");
    return;
  }

  const newTransaction = {
    name: formData.get("name"),
    amount: parseFloat(formData.get("amount")),
    date: new Date(formData.get("date")).toISOString(),
    type: formData.get("type") === "on" ? "expense" : "income",
    userId: user.uid,
  };

  if (
    !newTransaction.name ||
    isNaN(newTransaction.amount) ||
    !newTransaction.date
  ) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Save to Firestore
  const docRef = await addDoc(transactionsCollection, newTransaction);
  transactions.push({ id: docRef.id, ...newTransaction });

  renderList();
  updateTotal();
});

// Load transactions when the page loads
loadTransactions();
