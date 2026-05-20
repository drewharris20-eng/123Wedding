// 1234 Weddings Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyATFREmnV9p1qEOwJ7AelQPMetoeMupz1k",
  authDomain: "weddings-galleries.firebaseapp.com",
  projectId: "weddings-galleries",
  storageBucket: "weddings-galleries.firebasestorage.app",
  messagingSenderId: "697553040356",
  appId: "1:697553040356:web:9ba7efbc4fa52d70c20df1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
