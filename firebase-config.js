
const firebaseConfig = {
  apiKey: "AIzaSyCR-n2puZUzymmGl1W2paC2_LDN0Pg-vRE",
  authDomain: "servicedeskapplication.firebaseapp.com",
  projectId: "servicedeskapplication",
  storageBucket: "servicedeskapplication.firebasestorage.app",
  messagingSenderId: "592316662688",
  appId: "1:592316662688:web:ada2aac485422d7d421ac5"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();