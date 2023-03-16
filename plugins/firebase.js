/* import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase?.apps.length) {
    const config = {
      apiKey: "AIzaSyD3aT-lYUQ4ts1sWe9B783LF8x_bLRfUSE",
      authDomain: "landing-cpch.firebaseapp.com",
      projectId: "landing-cpch",
      storageBucket: "landing-cpch.appspot.com",
      messagingSenderId: "308015079550",
      appId: "1:308015079550:web:cd9167a1fe50eb0e9bf82f"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()

export { fireDb } */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3aT-lYUQ4ts1sWe9B783LF8x_bLRfUSE",
  authDomain: "landing-cpch.firebaseapp.com",
  projectId: "landing-cpch",
  storageBucket: "landing-cpch.appspot.com",
  messagingSenderId: "308015079550",
  appId: "1:308015079550:web:cd9167a1fe50eb0e9bf82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
console.log(app.name);
const firestore = getFirestore(app)

export { firestore }

/* app.firestore().settings({timestampsInSnapshots: true})

const fireDb = app.firestore()

export { fireDb } */