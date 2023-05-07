import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
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
// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
