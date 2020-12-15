// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8fY6_ACmxe-0uf6KAJ0ykqeFY_z-nvgE",
  authDomain: "challenge-83f87.firebaseapp.com",
  projectId: "challenge-83f87",
  storageBucket: "challenge-83f87.appspot.com",
  messagingSenderId: "678448053916",
  appId: "1:678448053916:web:17ecf8ff82ecfbac3c3759",
  measurementId: "G-4DZBSZ1L9V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};