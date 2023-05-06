import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBD1o0nomjq4mN6sm5NzZpEiy7qTsCQzak",
  authDomain: "chatapp-cf005.firebaseapp.com",
  projectId: "chatapp-cf005",
  storageBucket: "chatapp-cf005.appspot.com",
  messagingSenderId: "267073346251",
  appId: "1:267073346251:web:3f26e1f62e9d9cd2bdd94e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
