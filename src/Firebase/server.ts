import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBL7eJMTzb7BgtWBT3rYWqnD2DwtuCglsI",
  authDomain: "borswer-extentions.firebaseapp.com",
  projectId: "borswer-extentions",
  storageBucket: "borswer-extentions.firebasestorage.app",
  messagingSenderId: "307743299014",
  appId: "1:307743299014:web:42ad05dbac7f8fdc9bcec7",
};

const app = initializeApp(firebaseConfig);
const DB = getDatabase(app);

export default DB;
