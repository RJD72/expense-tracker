# 💰 Expense Tracker with AI Chatbot

A web-based **Expense Tracker** built with Firebase, Firestore, and Parcel. This app allows users to **log expenses and income, view monthly spending, and interact with an AI chatbot** for financial insights.

## 🚀 Features

✅ **User Authentication** – Sign in/out using Google OAuth.  
✅ **Expense & Income Tracking** – Add, delete, and view transactions.  
✅ **Monthly Overview** – View categorized transactions by month.  
✅ **AI Chatbot Integration**

- Get expense summaries.
- Add transactions using text commands.
- View last month’s spending.

## 🛠️ Setup & Installation

### 1️⃣ **Clone the Repository**

git clone https://github.com/rjd72/expense-tracker.git cd expense-tracker

### 2️⃣ **Install Dependencies**

npm install

### 3️⃣ **Configure Firebase**

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Firestore Database** and **Authentication (Google Sign-In)**.
4. Copy your Firebase config and replace it in `firebaseConfig.js`:

   js const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT_ID.firebaseapp.com", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT_ID.appspot.com", messagingSenderId: "YOUR_SENDER_ID", appId: "YOUR_APP_ID", };

5. **Set up API Key for Google Generative AI**:
   - Go to Firestore Database.
   - Create a **collection**: `apikey`
   - Create a **document**: `googlegenai`
   - Add a **field**: `"key": "YOUR_GENERATIVE_AI_KEY"`

### 4️⃣ **Run the App**

npm run start

Then open **`http://localhost:1234/`**.

## 🤖 Chatbot Commands

| Command                    | Description                     |
| -------------------------- | ------------------------------- |
| `Summarize expenses`       | Get total expenses.             |
| `Show last month`          | View previous month's expenses. |
| `Total spent on... `       | View total amount spent on...   |
| `Total earned from... `    | View total amount from...       |
| `Add expense 50 Groceries` | Log an expense.                 |
| `Add income 500 Salary`    | Log an income.                  |

Or simply ask it any question!

## 🔐 Firestore Security Rules

For better security, update **Firestore Rules** to ensure only **logged-in users** can access their data.

Go to **Firebase Console** → **Firestore Database** → **Rules**, then update:

json rules_version = '2'; service cloud.firestore { match /databases/{database}/documents { match /transactions/{transactionId} { allow read, write: if request.auth != null && request.auth.uid == resource.data.userId; } } }

✅ **Users can only access their own transactions.**

## 📝 To-Do (Future Improvements)

- ✅ AI chatbot integration
- ✅ Monthly expense filtering
- ⏳ CSV Export for reports
- ⏳ Dark mode theme

## 💡 Credits

Developed by **Rob Deer** 🔗 GitHub: [@rjd72](https://github.com/rjd72)

## 📄 License

This project is open-source and licensed under the **MIT License**.

### 🚀 **Next Steps**

- Replace `"YOUR_API_KEY"` & `"YOUR_PROJECT_ID"` in Firebase setup.
- Update `"your-username"` with your **GitHub username**.
- Test the chatbot commands in the app.
