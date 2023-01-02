// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6_GuXAuG6vQl8zPbmFKudsU6V80cTIbQ",
  authDomain: "corexlab-limited-react-app.firebaseapp.com",
  projectId: "corexlab-limited-react-app",
  storageBucket: "corexlab-limited-react-app.appspot.com",
  messagingSenderId: "141568718074",
  appId: "1:141568718074:web:986eb56e8218bec52d0543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;