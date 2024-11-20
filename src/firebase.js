// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS9KjTZFsmu5wA6CoHQkF8GdRu-PhdC94",
  authDomain: "netflix-gpt-195ee.firebaseapp.com",
  projectId: "netflix-gpt-195ee",
  storageBucket: "netflix-gpt-195ee.firebasestorage.app",
  messagingSenderId: "48943890681",
  appId: "1:48943890681:web:bc64bdd779eb6d6de76228",
  measurementId: "G-T1CE0FTSWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
