import { getAnalytics } from "firebase/analytics"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCAxO2EyOzCoqc5xnhaxmAD1M4Q3RM0CxA",
//   authDomain: "matma-47017.firebaseapp.com",
//   projectId: "matma-47017",
//   storageBucket: "matma-47017.appspot.com",
//   messagingSenderId: "842095880014",
//   appId: "1:842095880014:web:fb41884fdb7ef995db201f",
//   measurementId: "G-7PNHN570ZB",
// }

console.log(import.meta.env)

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_apiKey,
  authDomain: env.VITE_authDomain,
  projectId: env.VITE_projectId,
  storageBucket: env.VITE_storageBucket,
  messagingSenderId: env.VITE_messagindSenderId,
  appId: env.VITE_appId,
  measurementId: env.VITE_measurementId,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

export { firebaseApp }
