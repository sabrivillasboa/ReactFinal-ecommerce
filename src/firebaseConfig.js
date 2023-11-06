import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQXXynKEGgd_Vr4f_sngpWGn5NQmvAaCE",
  authDomain: "mybook-ecommerce.firebaseapp.com",
  projectId: "mybook-ecommerce",
  storageBucket: "mybook-ecommerce.appspot.com",
  messagingSenderId: "469977925414",
  appId: "1:469977925414:web:6211896c233a0ba1dfe3e7"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)