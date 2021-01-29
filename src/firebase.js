// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCV6XhxdN99isJqcLYbwBUNNCPaKVYgjwA",
  authDomain: "instagram-clone-f157e.firebaseapp.com",
  databaseURL: "https://instagram-clone-f157e-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-f157e",
  storageBucket: "instagram-clone-f157e.appspot.com",
  messagingSenderId: "215248452282",
  appId: "1:215248452282:web:939b547f4faaeb5e986083",
  measurementId: "G-91YKRJ6KVB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
  
export { db, auth, storage };