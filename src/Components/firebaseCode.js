// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2pvjEf7gvTrM26Q4FV0zUWAZRD0Jqyhg",
  authDomain: "message-mern-9b974.firebaseapp.com",
  projectId: "message-mern-9b974",
  storageBucket: "message-mern-9b974.appspot.com",
  messagingSenderId: "836594176750",
  appId: "1:836594176750:web:7028ee78440025494899ff",
  measurementId: "G-5621XV62T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);