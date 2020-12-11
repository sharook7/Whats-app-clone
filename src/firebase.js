import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR38dgJx3onw7tZ-PF7GQwNs4GVFQ85lQ",
  authDomain: "sharook-whats-app-clone.firebaseapp.com",
  databaseURL: "https://sharook-whats-app-clone.firebaseio.com",
  projectId: "sharook-whats-app-clone",
  storageBucket: "sharook-whats-app-clone.appspot.com",
  messagingSenderId: "76734646203",
  appId: "1:76734646203:web:40edfcb6b7789a7fa6669e",
  measurementId: "G-NP31N2E830"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider };
export default db ;