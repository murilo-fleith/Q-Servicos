import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDBqvHQs9vDLxYyJLHdUYq1eYD30809wO0",
    authDomain: "tcc-murilo.firebaseapp.com",
    databaseURL: "https://tcc-murilo-default-rtdb.firebaseio.com",
    projectId: "tcc-murilo",
    storageBucket: "tcc-murilo.appspot.com",
    messagingSenderId: "476150700082",
    appId: "1:476150700082:web:343efc6e704d87d44f842b",
    measurementId: "G-8C8PEZJRS9"
};

firebase.initializeApp(firebaseConfig);
var databse = firebase.firestore();
//export default databse;
export default firebase;
  //var storage = firebase.storage();
