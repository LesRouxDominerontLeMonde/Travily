// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "travily-b55f6.firebaseapp.com",
  projectId: "travily-b55f6",
  storageBucket: "travily-b55f6.appspot.com",
  messagingSenderId: "585138947845",
  appId: "1:585138947845:web:1ae45ae8bda30858bd996c",
  measurementId: "G-XVC7QJ5DTM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);