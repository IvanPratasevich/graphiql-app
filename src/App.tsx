import { Navigate, Routes, Route } from 'react-router';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './firebase/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import { privateRoutes, publicRoutes } from '../router';
import { SIGNUP_ROUTE, MAIN_ROUTE } from './utils/consts';
import Header from './componenets/Header/Header';

// const res = auth.currentUser?.getIdTokenResult();

function App() {
  console.log(auth.currentUser?.email);
  const str = useAuthState(auth);
  console.log(str[0]?.email);
  const userValid = !!str[0]?.email;

  return userValid ? (
    <>
      <Header />
      <Routes>
        {privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
        <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
    </>
  ) : (
    <>
      <Header />
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
        <Route path="*" element={<Navigate to={SIGNUP_ROUTE} />} />
      </Routes>
    </>
  );
  // getAuth().signOut();
  // const email = getAuth().currentUser?.email
}

export default App;
