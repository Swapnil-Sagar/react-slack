import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-C8N9n2kat0u3Cn67TEBLhgN_U-ZqM5s',
  authDomain: 'react-slack-93f52.firebaseapp.com',
  databaseURL: 'https://react-slack-93f52.firebaseio.com',
  projectId: 'react-slack-93f52',
  storageBucket: 'react-slack-93f52.appspot.com',
  messagingSenderId: '902278823529',
  appId: '1:902278823529:web:fd19339ce4b21bce526cf8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
