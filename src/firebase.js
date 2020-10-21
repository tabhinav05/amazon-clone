import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxcR6GxKkN7OnvfOU3sMNij3V2UT0tcU4",
    authDomain: "clone-aaee6.firebaseapp.com",
    databaseURL: "https://clone-aaee6.firebaseio.com",
    projectId: "clone-aaee6",
    storageBucket: "clone-aaee6.appspot.com",
    messagingSenderId: "73745367657",
    appId: "1:73745367657:web:6009d7d9113ba7e9bd18f8",
    measurementId: "G-Z906330P1E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }
