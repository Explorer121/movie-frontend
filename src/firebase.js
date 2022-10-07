import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmltRr5mG8Q6t9Z_VQdkkRbD3NWAfD4Tw",
  authDomain: "explorer-portfolio-359002.firebaseapp.com",
  projectId: "explorer-portfolio-359002",
  storageBucket: "explorer-portfolio-359002.appspot.com",
  messagingSenderId: "979364926177",
  appId: "1:979364926177:web:48627127bc84fd8b6c5da0",
  measurementId: "G-CCHX72DDKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
     auth
}