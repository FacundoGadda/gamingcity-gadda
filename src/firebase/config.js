// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfAufSZJ9bCSsjyh7CH0xch5ffxJscbic",
  authDomain: "gaming-city-5564c.firebaseapp.com",
  projectId: "gaming-city-5564c",
  storageBucket: "gaming-city-5564c.appspot.com",
  messagingSenderId: "149578511063",
  appId: "1:149578511063:web:39762f901338b04f513692"
};

const app = initializeApp(firebaseConfig)

export default function getFirestoreApp() {
  return app
}