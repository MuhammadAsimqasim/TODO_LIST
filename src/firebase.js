import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAsIIwS_9CUXfMuHzBg1qt2f1EdSKJAOM0",
  authDomain: "tudo-bffc1.firebaseapp.com",
  projectId: "tudo-bffc1",
  storageBucket: "tudo-bffc1.appspot.com",
  messagingSenderId: "289002573032",
  appId: "1:289002573032:web:6e4928e03dca3f3addcd5d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

console.log(db)

export { auth };
export default db;

// 1//03dbFv75K71HICgYIARAAGAMSNwF-L9Ir63WqjZ6FaeVs4wf7-gKH-LpxD7j6oqImZxtBM90I3OTHlQtpX_zy3qfeZTMzLJCaYyM