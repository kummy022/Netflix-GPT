// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEZ52EjiIb0EbAU2LvkFNUjGvtHO-sFHw",
  authDomain: "netflixgpt-8bd1a.firebaseapp.com",
  projectId: "netflixgpt-8bd1a",
  storageBucket: "netflixgpt-8bd1a.appspot.com",
  messagingSenderId: "346179000502",
  appId: "1:346179000502:web:7e11853d8113fc39136e17",
  measurementId: "G-905GNMBDM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();