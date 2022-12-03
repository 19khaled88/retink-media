import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB6-ZkB_rEsWtuOiK_9PWJDMoFWfmy6H80",
    authDomain: "retink-9d1e8.firebaseapp.com",
    projectId: "retink-9d1e8",
    storageBucket: "retink-9d1e8.appspot.com",
    messagingSenderId: "516249916204",
    appId: "1:516249916204:web:d8c793e71166ea6a109289",
    measurementId: "G-FBRKRM5WQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
       if(result.user.email !== null){
          
       }
    }).catch((error)=>{
        console.log(error)
    })
}