// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCssHgaNaaXB6uux1HG4_6BQOL6h1zNgoI",
    authDomain: "product-management-dashb-ce92f.firebaseapp.com",
    projectId: "product-management-dashb-ce92f",
    storageBucket: "product-management-dashb-ce92f.firebasestorage.app",
    messagingSenderId: "703060275881",
    appId: "1:703060275881:web:bd721c3473f8d4956fafb8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
