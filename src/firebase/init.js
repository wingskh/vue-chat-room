// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAewoe_iBp9dFZ7ImuWiT8N43o2isecWLU",
  authDomain: "vue-chat-room-91081.firebaseapp.com",
  projectId: "vue-chat-room-91081",
  storageBucket: "vue-chat-room-91081.appspot.com",
  messagingSenderId: "1094599086767",
  appId: "1:1094599086767:web:2afdb8c77f8f21b756fa5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
