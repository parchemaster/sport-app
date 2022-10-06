import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVY3OxLNYssOfksVopqZRn5aXeUQkIP98",
  authDomain: "sport-app-d5dbe.firebaseapp.com",
  projectId: "sport-app-d5dbe",
  storageBucket: "sport-app-d5dbe.appspot.com",
  messagingSenderId: "680586654448",
  appId: "1:680586654448:web:fdca04cbf5da175d834835",
  measurementId: "G-FZRVY2BRES",
  storageBucket: 'gs://sport-app-d5dbe.appspot.com'
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Initialize Firebase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);