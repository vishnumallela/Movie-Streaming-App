import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDx6QUCSEHqnfRfepfCndg78biDBH60uHo",
    authDomain: "netflix-271b6.firebaseapp.com",
    projectId: "netflix-271b6",
    storageBucket: "netflix-271b6.appspot.com",
    messagingSenderId: "1089581992313",
    appId: "1:1089581992313:web:9722403b4891fb9b8987a8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebaseApp.auth();

 export {auth};
 export default db;



 