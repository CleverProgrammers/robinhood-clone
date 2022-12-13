import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCFuet1rmeiKeUGbchc1BwgO1sbEbG0RUU",

    authDomain: "stockrain-3d18d.firebaseapp.com",
  
    databaseURL: "https://stockrain-3d18d-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "stockrain-3d18d",
  
    storageBucket: "stockrain-3d18d.appspot.com",
  
    messagingSenderId: "651787294372",
  
    appId: "1:651787294372:web:0e3217f15940aed3f2f831"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };