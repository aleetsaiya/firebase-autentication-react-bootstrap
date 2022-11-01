import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfvHK-5VY7vhi7ceWOTO-x0WLZ_ReaCPs",
  authDomain: "fir-authentication-77e08.firebaseapp.com",
  projectId: "fir-authentication-77e08",
  storageBucket: "fir-authentication-77e08.appspot.com",
  messagingSenderId: "881712516697",
  appId: "1:881712516697:web:8622b0be74726c5116ab48",
  measurementId: "G-DTJ16LKWT1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
