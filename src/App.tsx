import './App.css';

import { Navigate, Routes, Route } from 'react-router';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './firebase/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import { privateRoutes, publicRoutes } from '../router';
import { SIGNUP_ROUTE, MAIN_ROUTE } from './utils/consts';

// const res = auth.currentUser?.getIdTokenResult();

function App() {
  console.log(auth.currentUser?.email);
  const str = useAuthState(auth);
  console.log(str[0]?.email);
  const userValid = !!str[0]?.email;

  return userValid ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={SIGNUP_ROUTE} />} />
    </Routes>
  );
  // getAuth().signOut();
  // const email = getAuth().currentUser?.email
}

export default App;
