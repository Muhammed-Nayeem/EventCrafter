import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = import.meta.env;

const firebaseConfig = {
  apiKey: config.VITE_APIKEY,
  authDomain: config.VITE_AUTHDOMAIN,
  projectId: config.VITE_PROJECTID,
  storageBucket: config.VITE_STORAGEBUCKET,
  messagingSenderId: config.VITE_MESSAGINGSENDERID,
  appId: config.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
