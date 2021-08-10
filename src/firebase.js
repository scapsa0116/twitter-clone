import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDDa1HQCwnYI31lDB7cikititLs-4BVPjc",
    authDomain: "twitter-clone-fe602.firebaseapp.com",
    projectId: "twitter-clone-fe602",
    storageBucket: "twitter-clone-fe602.appspot.com",
    messagingSenderId: "329617216047",
    appId: "1:329617216047:web:1cc87035d92ca47ec06cda",
    measurementId: "G-PHW4BKJNXM"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 export default db;