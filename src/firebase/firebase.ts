import { initializeApp } from 'firebase/app';
import { firebase } from '../enum/firebase';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: firebase.REACT_APP_FIREBASE_API_KEY,
  authDomain: firebase.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: firebase.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: firebase.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebase.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: firebase.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
