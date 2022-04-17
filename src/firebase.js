import firebase from "firebase/app";
import  "firebase/auth"; // for Authentication
import  "firebase/firestore"; // for cloud storage
import  "firebase/database"; //for realtime Database
import  "firebase/storage"; //for storage





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

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export { auth, provider }
  export default db