// related to the information (firebaseConfig object) needed to connect to back end (firebase).
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();
export default firebase;
