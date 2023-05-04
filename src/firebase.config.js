// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp_6j5QtYco7NVQenLFLq4wYi0czq8KP4",
  authDomain: "taste-bengel.firebaseapp.com",
  projectId: "taste-bengel",
  storageBucket: "taste-bengel.appspot.com",
  messagingSenderId: "284288185104",
  appId: "1:284288185104:web:7941d8f0f46f6e8e25eb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;