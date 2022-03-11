// Import the functions you need from the SDKs you need
import * as firebasse from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIvZAcwXuwbB-2DqOuXYGSvfdMqM3UoLE",
  authDomain: "meghan-firegram.firebaseapp.com",
  projectId: "meghan-firegram",
  storageBucket: "meghan-firegram.appspot.com",
  messagingSenderId: "640730293509",
  appId: "1:640730293509:web:6541337bf96e8e1960436c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
