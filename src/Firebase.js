import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuHnfPWis_kmBjGMA_AaZr4qiTGz9C1VI",
  authDomain: "admindash-fb6e7.firebaseapp.com",
  projectId: "admindash-fb6e7",
  storageBucket: "admindash-fb6e7.firebasestorage.app",
  messagingSenderId: "547575277012",
  appId: "1:547575277012:web:c3369467e4501778cf2241",
  measurementId: "G-2DWW9K1TY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
