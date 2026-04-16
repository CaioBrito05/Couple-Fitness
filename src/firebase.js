import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "contadoracademia-34c91.firebasestorage.app",
  messagingSenderId: "551610128519",
  appId: "1:551610128519:web:bef21b50790f3363598022",
  measurementId: "G-QY0YXF1Z8G"
};

// Inicializa
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
