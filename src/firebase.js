import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCqFPNis1gop-IPI2xHKwWnlRn_ItI_ueQ",
  authDomain: "kino-media.firebaseapp.com",
  projectId: "kino-media",
  storageBucket: "kino-media.appspot.com",
  messagingSenderId: "378170858201",
  appId: "1:378170858201:web:e3eb242039e8fe955b7cc8",
  measurementId: "G-DEYJMRH9B0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
