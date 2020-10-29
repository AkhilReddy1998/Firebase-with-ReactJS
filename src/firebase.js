import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLrJaOCPoIvk4crAOEM50M4wXDg2tyetk",
  authDomain: "hello-world-d0c3c.firebaseapp.com",
  databaseURL: "https://hello-world-d0c3c.firebaseio.com",
  projectId: "hello-world-d0c3c",
  storageBucket: "hello-world-d0c3c.appspot.com",
  messagingSenderId: "661545635944",
  appId: "1:661545635944:web:29a4dccf795f6164aaabdd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
