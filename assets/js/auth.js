import { auth } from "./firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Initialize Firebase Authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

// DOM Elements
const signInBtn = document.getElementById("googleSignInBtn");
const signOutBtn = document.getElementById("googleSignOutBtn");
const userInfo = document.getElementById("userInfo");

// Google Sign-In Function
export function signInUser() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Signed in:", result.user);
    })
    .catch((error) => {
      console.error("Sign-in error:", error);
    });
}

// Google Sign-Out Function
export function signOutUser() {
  signOut(auth)
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      console.error("Sign-out error:", error);
    });
}

// Monitor Authentication State
export function monitorAuthState(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.textContent = `Logged in as ${user.displayName}`;
      signInBtn.style.display = "none";
      signOutBtn.style.display = "block";

      if (callback) {
        callback(user);
      }
    } else {
      userInfo.textContent = "";
      signInBtn.style.display = "block";
      signOutBtn.style.display = "none";

      if (callback) {
        callback(null);
      }
    }
  });
}
