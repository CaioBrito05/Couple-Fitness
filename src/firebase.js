import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (analytics é opcional, pode remover se quiser)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBeooHa0_GAm-GJXtqpKS17rOBjY8DZZ20",
  authDomain: "contadoracademia-34c91.firebaseapp.com",
  projectId: "contadoracademia-34c91",
  storageBucket: "contadoracademia-34c91.firebasestorage.app",
  messagingSenderId: "551610128519",
  appId: "1:551610128519:web:bef21b50790f3363598022",
  measurementId: "G-QY0YXF1Z8G"
};

// Inicializa
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// opcional
const analytics = getAnalytics(app);