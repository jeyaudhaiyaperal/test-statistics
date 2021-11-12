// Import the functions you need from the SDKs you need
import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbH2-iEKILSkcgFQIMK3s1HQYGzICfGho",
  authDomain: "sample-3fbb2.firebaseapp.com",
  projectId: "sample-3fbb2",
  storageBucket: "sample-3fbb2.appspot.com",
  messagingSenderId: "592531816679",
  appId: "1:592531816679:web:f265f942b9883d9d402242",
  measurementId: "G-7NW1GW7DGN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;