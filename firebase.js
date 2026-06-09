import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
  getAuth, 
  GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAnbLc-CKMVATP22OQ53zmB_LzNCxfj_2Q",
  authDomain: "mt-varejao-ofc.firebaseapp.com",
  projectId: "mt-varejao-ofc",
  storageBucket: "mt-varejao-ofc.firebasestorage.app",
  messagingSenderId: "594851776189",
  appId: "1:594851776189:web:a3329f714dace333c899d4"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});


export const ADMIN_EMAIL = "mtvarejaoofc@gmail.com";