import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCQTjsAc8aOo0NwueBRS14VcudbX3B8qO8",
    authDomain: "my-instagram-clone-react-d3c3f.firebaseapp.com",
    projectId: "my-instagram-clone-react-d3c3f",
    storageBucket: "my-instagram-clone-react-d3c3f.appspot.com",
    messagingSenderId: "570673112358",
    appId: "1:570673112358:web:1d3a3cfc50462ea9448de7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()