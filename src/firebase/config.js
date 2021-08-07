import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAyLueVyf7IWW5kuZm_ugxcuw3FHiujp5U",
    authDomain: "shop-4u.firebaseapp.com",
    projectId: "shop-4u",
    storageBucket: "shop-4u.appspot.com",
    messagingSenderId: "194319510829",
    appId: "1:194319510829:web:a60f987891bd6f0b5b37a4"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  export{projectFirestore}