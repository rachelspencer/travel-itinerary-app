// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Replace the following with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGx0Ts63pXCLRfQQCeMA0qLh1hvKXiCY",
  authDomain: "itinerarybuilder2024.firebaseapp.com",
  databaseURL: "https://itinerarybuilder2024-default-rtdb.firebaseio.com",
  projectId: "itinerarybuilder2024",
  storageBucket: "itinerarybuilder2024.appspot.com",
  messagingSenderId: "254313522204",
  appId: "1:254313522204:web:b03dd60fc451688b382bd9",
  measurementId: "G-5WWLCPK7N7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };