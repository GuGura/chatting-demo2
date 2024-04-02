// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5yNezeNdZzW5gWNc9UqVx4_FGv8mzxR4",
    authDomain: "mychatapp-ee3d9.firebaseapp.com",
    projectId: "mychatapp-ee3d9",
    storageBucket: "mychatapp-ee3d9.appspot.com",
    messagingSenderId: "438407478766",
    appId: "1:438407478766:web:75afbc9113cce3dddd22ff",
    measurementId: "G-SHJLJS06E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}
