import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAH1MbjZzYDInRNwJGPfkZNggQhxMLimGU",
    authDomain: "reactjs-9f1d6.firebaseapp.com",
    projectId: "reactjs-9f1d6",
    storageBucket: "reactjs-9f1d6.appspot.com",
    messagingSenderId: "948723297338",
    appId: "1:948723297338:web:ce7b50ab49782c9d575903",
    measurementId: "G-1RV31DEZ31"
  });

  const db = firebaseApp.firestore();

  export default db;