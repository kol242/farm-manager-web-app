import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyA7dIxZWwWI8gveAO3EXiDd496NwVkybL4",
    authDomain: "farm-manager-app-b2c03.firebaseapp.com",
    projectId: "farm-manager-app-b2c03",
    storageBucket: "farm-manager-app-b2c03.appspot.com",
    messagingSenderId: "664560461607",
    appId: "1:664560461607:web:8fbc59523f4be298fb2b02"
})


export const auth = getAuth(app)
export const db = getFirestore(app)