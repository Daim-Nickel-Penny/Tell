import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38Gmw1xtle4Rby7bHgay7CFio55NuxyA",
  authDomain: "tell-7ed26.firebaseapp.com",
  databaseURL: "https://tell-7ed26.firebaseio.com",
  projectId: "tell-7ed26",
  storageBucket: "tell-7ed26.appspot.com",
  messagingSenderId: "335702135550",
  appId: "1:335702135550:web:c5e56aeb62d539c3490baf",
  measurementId: "G-QYBD39VCDW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
