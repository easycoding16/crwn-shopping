import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSgAJeCx94V2v-8VOxBaXQst2yr7A8DTY",
  authDomain: "crwn-shopping-83dab.firebaseapp.com",
  databaseURL: "https://crwn-shopping-83dab.firebaseio.com",
  projectId: "crwn-shopping-83dab",
  storageBucket: "crwn-shopping-83dab.appspot.com",
  messagingSenderId: "817907681795",
  appId: "1:817907681795:web:86a37bd29ab595951c9c36",
  measurementId: "G-G6MTL81K18",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
