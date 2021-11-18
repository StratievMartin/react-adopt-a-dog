import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-leGrp68fvCF_HxkLrE1b0-nYFsVLjts",
  authDomain: "adopt-a-dog-1716c.firebaseapp.com",
  projectId: "adopt-a-dog-1716c",
  storageBucket: "adopt-a-dog-1716c.appspot.com",
  messagingSenderId: "999594392390",
  appId: "1:999594392390:web:4a245ce4caffcff35d8347",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
