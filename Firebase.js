import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDBqvHQs9vDLxYyJLHdUYq1eYD30809wO0",
  authDomain: "tcc-murilo.firebaseapp.com",
  projectId: "tcc-murilo",
  storageBucket: "tcc-murilo.appspot.com",
  messagingSenderId: "476150700082",
  appId: "1:476150700082:web:343efc6e704d87d44f842b",
  measurementId: "G-8C8PEZJRS9"
  };

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;

