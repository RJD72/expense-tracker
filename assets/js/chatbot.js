import { GoogleGenerativeAI } from "@google/generative-ai";
import { db, auth } from "./firebaseConfig.js";
import { getDoc, doc, collection, addDoc } from "firebase/firestore";
import { transactions, loadTransactions } from "./script.js";

let apiKey;
let genAI;
let model;

// Fetch API key from Firestore
async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  console.log("Gemini API is ready");
}

// Ask Chatbot a Question
async function askChatBot(request) {
  try {
    const result = await model.generateContent(request);
    const responseText = result.response.candidates[0].content.parts[0].text;

    appendMessage(responseText);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    appendMessage("Sorry, I couldn't process that request");
  }
}

// Chatbot button event listener
document.getElementById("aiButton").addEventListener("click", async () => {
  if (!model) {
    appendMessage("Ai is still initializing, please wait...");
    return;
  }
  let inputField = document.getElementById("aiInput");
  let prompt = inputField.value.trim().toLowerCase();

  if (prompt) {
    const isHandledByRules = await ruleChatBot(prompt);
    if (!isHandledByRules) {
      await askChatBot(prompt);
      prompt = "";
    }
  } else {
    appendMessage("Please enter a prompt");
  }

  inputField.value = "";
});

// Process Budget-Related Chatbot Commands
async function ruleChatBot(request) {
  if (request.startsWith("summarize expenses")) {
    appendMessage(summarizeExpenses());
    return true;
  } else if (request.startsWith("show last month")) {
    appendMessage(getLastMonthExpenses());
    return true;
  } else if (request.startsWith("add expense")) {
    let success = await addTransaction(request, "expense");
    appendMessage(
      success
        ? "Expense added!"
        : "Invalid expense format. Use: 'Add expense 50 Groceries'"
    );
    return true;
  } else if (request.startsWith("add income")) {
    let success = await addTransaction(request, "income");
    appendMessage(
      success
        ? "Income added!"
        : "Invalid income format. Use: 'Add income 100 Salary'"
    );
    return true;
  } else if (request.startsWith("total spent on")) {
    let category = request.replace("total spent on", "").trim();
    appendMessage(getTotalByCategory(category, "expense"));
    return true;
  } else if (request.startsWith("total earned from")) {
    let category = request.replace("total earned from", "").trim();
    appendMessage(getTotalByCategory(category, "income"));
    return true;
  }

  return false;
}

// Add Income or Expense via Chatbot
async function addTransaction(request, type) {
  let prompt = document.getElementById("aiInput");

  const match = request.match(/add (income|expense) (\d+(\.\d{1,2})?) (.+)/);

  if (!match) {
    return false;
  }

  const amount = parseFloat(match[2]);
  const name = match[4].trim();

  if (!amount || !name) {
    return false;
  }

  const user = auth.currentUser;
  if (!user) {
    appendMessage("You must be logged in to add transactions.");
    return false;
  }

  try {
    // Save transaction to Firestore
    await addDoc(collection(db, "transactions"), {
      name,
      amount,
      date: new Date().toISOString(),
      type,
      userId: user.uid,
    });

    // Refresh transactions list
    await loadTransactions(user);
    prompt.value = "";
    return true;
  } catch (error) {
    console.error("Error adding transaction:", error);
    appendMessage("Failed to add transaction. Check console for errors.");
    prompt.value = "";
    return false;
  }
}

// Generate a summary of expenses
function summarizeExpenses() {
  if (transactions.length === 0) {
    return "No transactions recorded yet.";
  }

  let totalExpense = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((sum, trx) => sum + trx.amount, 0);

  return `You have spent a total of ${formatCurrency(totalExpense)} so far.`;
}

// Get Last Month's Expenses
function getLastMonthExpenses() {
  if (transactions.length === 0) {
    return "No transactions recorded yet.";
  }

  let now = new Date();
  let lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
  let monthKey = `${lastMonth.getFullYear()}-${(lastMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;

  let lastMonthExpenses = transactions
    .filter(
      (trx) => trx.type === "expense" && trx.date.startsWith(monthKey) // Ensure date is in YYYY-MM format
    )
    .reduce((sum, trx) => sum + trx.amount, 0);

  return `You spent ${formatCurrency(lastMonthExpenses)} in ${monthKey}.`;
}

// Get total income/expense by name
function getTotalByCategory(category, type) {
  if (transactions.length === 0) {
    return `No transactions recorded yet.`;
  }

  let total = transactions
    .filter(
      (trx) =>
        trx.type === type && trx.name.toLowerCase() === category.toLowerCase()
    )
    .reduce((sum, trx) => sum + trx.amount, 0);

  return total > 0
    ? `You have ${type === "expense" ? "spent" : "earned"} ${formatCurrency(
        total
      )} on "${category}".`
    : `No records found for "${category}".`;
}

// Display Chatbot Messages
function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  document.getElementById("chatHistory").appendChild(history);
}

// Format Currency
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "always",
  }).format(value);
}

// Initialize Chatbot API
getApiKey();
