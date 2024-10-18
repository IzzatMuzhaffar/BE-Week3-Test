import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDbIKn4zFrGnd6ApO1hquxmE6Cpt8V0j8",
    authDomain: "be-week3-test.firebaseapp.com",
    projectId: "be-week3-test",
    storageBucket: "be-week3-test.appspot.com",
    messagingSenderId: "960411550736",
    appId: "1:960411550736:web:a5864f4bf29b1cc0fff695"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);