
import firebase from "firebase/app"

import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0UFUnBUfN0GM-6dGjGHIDYm1I1sP4z5g",
  authDomain: "app-joaquin-de-la-parra.firebaseapp.com",
  projectId: "app-joaquin-de-la-parra",
  storageBucket: "app-joaquin-de-la-parra.appspot.com",
  messagingSenderId: "98239359374",
  appId: "1:98239359374:web:209294d955503ce6dfdcdf"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)