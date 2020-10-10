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
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { dispplayName, email, photoURL } = user;

    try {
      const user = {
        display_name: dispplayName,
        email,
        photoURL: photoURL,
        created_at: new Date(),
      };
      await userRef.set({});
    } catch (error) {
      console.log('Error', error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error in getUserDocument', error.message);
  }
}
