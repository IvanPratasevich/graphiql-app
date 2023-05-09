import { Navigate, Routes, Route } from 'react-router';

import { onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../../firebase/firebase';

import { privateRoutes, publicRoutes } from '../../../router';
import { SIGNUP_ROUTE, MAIN_ROUTE } from '../../utils/consts';

import { useState } from 'react';

// const res = auth.currentUser?.getIdTokenResult();

function AppRouter() {
  // console.log(auth.currentUser?.email);
  // const str = useAuthState(auth);
  // console.log(str[0]?.email);
  // let userValid = !!str[0]?.email;
  // let userValid = false;
  // const auth = getAuth();

  // auth.currentUser.getIdTokenResult();
  // let userValid = false;
  const [userValid, setUserValid] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserValid(true);
    } else {
      setUserValid(false);
    }
  });

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
}

export default AppRouter;
