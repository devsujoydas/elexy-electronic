// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN1bEDFjVlMQQkUb0L2criOmnX8ITEG0o",
  authDomain: "elexy-electronics.firebaseapp.com",
  projectId: "elexy-electronics",
  storageBucket: "elexy-electronics.firebasestorage.app",
  messagingSenderId: "51751721433",
  appId: "1:51751721433:web:ce1134c87ea384f3d821c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
export default auth;