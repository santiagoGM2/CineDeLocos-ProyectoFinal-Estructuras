// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1QwWrJO2vdhMfixwiWzf1r7Hws0MNkuw",
  authDomain: "cinedelocos-c6595.firebaseapp.com",
  projectId: "cinedelocos-c6595",
  storageBucket: "cinedelocos-c6595.firebasestorage.app",
  messagingSenderId: "832462823134",
  appId: "1:832462823134:web:c371e4bbf4c0d3b320ec4f",
  measurementId: "G-4V9MC7MSQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth}