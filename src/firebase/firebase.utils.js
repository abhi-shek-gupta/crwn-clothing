import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGRM--kN_xF03ChXQDmRPIkiL2IuPDKKY",
  authDomain: "crwn-db-a516c.firebaseapp.com",
  databaseURL: "https://crwn-db-a516c.firebaseio.com",
  projectId: "crwn-db-a516c",
  storageBucket: "crwn-db-a516c.appspot.com",
  messagingSenderId: "1067181329462",
  appId: "1:1067181329462:web:5581309f6bed904cca1c97",
  measurementId: "G-JTSYGYW6NQ"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
