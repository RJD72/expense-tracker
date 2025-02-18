// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfi4qBrJnQ-E2Sln8D7UZcV46lWSAMA70",
  authDomain: "budget-planner-3ba38.firebaseapp.com",
  projectId: "budget-planner-3ba38",
  storageBucket: "budget-planner-3ba38.firebasestorage.app",
  messagingSenderId: "254257477383",
  appId: "1:254257477383:web:9d7cac52150da77391b7a2",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firestore and Auth
export { db, auth };
