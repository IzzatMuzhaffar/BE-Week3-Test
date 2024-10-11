// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBamdl8cqupYYFhoLb6xr0tBgad8gxrLMo",
    authDomain: "twitter-clone-b1aa3.firebaseapp.com",
    projectId: "twitter-clone-b1aa3",
    storageBucket: "twitter-clone-b1aa3.appspot.com",
    messagingSenderId: "101909927637",
    appId: "1:101909927637:web:d3f3447b20d5887750b45c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
