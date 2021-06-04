// const firebaseConfig = {
//     apiKey: "AIzaSyCXFhjgrbVYjnbhzXo4LCyNtNdfXz2daFk",
//     authDomain: "todo-app-react-936e3.firebaseapp.com",
//     projectId: "todo-app-react-936e3",
//     storageBucket: "todo-app-react-936e3.appspot.com",
//     messagingSenderId: "118637715706",
//     appId: "1:118637715706:web:ccfafd7f69b7f9eeef2943",
//     measurementId: "G-F7KNLR6WBX"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXFhjgrbVYjnbhzXo4LCyNtNdfXz2daFk",
  authDomain: "todo-app-react-936e3.firebaseapp.com",
  projectId: "todo-app-react-936e3",
  storageBucket: "todo-app-react-936e3.appspot.com",
  messagingSenderId: "118637715706",
  appId: "1:118637715706:web:ccfafd7f69b7f9eeef2943",
  measurementId: "G-F7KNLR6WBX",
});

const db = firebaseApp.firestore();

export default db;
