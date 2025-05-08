import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrHDHrYO2Z8tWmWRgWYcN4nWHwALZ4c0s",
  authDomain: "attendance-6b1b6.firebaseapp.com",
  projectId: "attendance-6b1b6",
  storageBucket: "attendance-6b1b6.firebasestorage.app",
  messagingSenderId: "808077953334",
  appId: "1:808077953334:web:238afede21744aee6f8b97",
  measurementId: "G-FZT4B2JQXH"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
