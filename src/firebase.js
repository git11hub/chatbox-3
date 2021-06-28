import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsS7SNikkuvPDEPjNYh-FGicUmYk8Zouk",
    authDomain: "chatbox-3.firebaseapp.com",
    projectId: "chatbox-3",
    storageBucket: "chatbox-3.appspot.com",
    messagingSenderId: "223677906469",
    appId: "1:223677906469:web:9ffd4202bc92f4e84349cc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };