import firebase from 'firebase'  

  const firebaseConfig = {
    apiKey: "AIzaSyCOhVsF74Hv0CPGwEyTMnhCuh6a0jXjnYI",
    authDomain: "clone-96456.firebaseapp.com",
    databaseURL: "https://clone-96456.firebaseio.com",
    projectId: "clone-96456",
    storageBucket: "clone-96456.appspot.com",
    messagingSenderId: "564944052029",
    appId: "1:564944052029:web:00573bc204dbfa58c16f54"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  