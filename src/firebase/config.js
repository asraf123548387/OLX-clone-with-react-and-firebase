import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBJWz-SrYME9kQeeaGHS7-R5AwEA0PfDDU",
    authDomain: "olx-clone-a4227.firebaseapp.com",
    projectId: "olx-clone-a4227",
    storageBucket: "olx-clone-a4227.appspot.com",
    messagingSenderId: "594466714998",
    appId: "1:594466714998:web:88b5e052203166c3cef657",
    measurementId: "G-XP9SCWVHY2"
  };
 export  default firebase.initializeApp(firebaseConfig)