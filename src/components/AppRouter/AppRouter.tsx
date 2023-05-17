import { Navigate, Routes, Route } from 'react-router';

import { onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../../firebase/firebase';

import { privateRoutes, publicRoutes } from '../../../router';
import { SIGNUP_ROUTE, MAIN_ROUTE } from '../../utils/consts';

import { useEffect, useState } from 'react';

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
  const [timeToken, setTimeToken] = useState(true);

  let currentTime = Math.floor(Date.now() / 1000);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // const res = await user.getIdTokenResult();
      // const espTime = await res.claims.exp;
      // console.log('currentTime', currentTime);
      // console.log('espTime', espTime);
      // console.log(currentTime >= Number(espTime));
      // currentTime >= Number(espTime) ? setTimeToken(false) : setTimeToken(true);
      setUserValid(true);
    } else {
      setUserValid(false);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      currentTime = Math.floor(Date.now() / 1000);
      console.log(currentTime, 'time');
    }, 3000);
    auth.currentUser?.getIdTokenResult().then((user) => {
      console.log('user.claims.exp', user.claims.exp); //1684349966
      console.log(currentTime - Number(user.claims.exp));

      // auth.signOut();
      // просто добавить выход
      currentTime >= Number(user.claims.exp) ? setTimeToken(false) : setTimeToken(true);
    });
    console.log('currentTime', currentTime);
  }, [currentTime]);

  // auth.currentUser
  //   ?.getIdTokenResult()
  //   // .then((user) => console.log(new Date(Number(user.claims.auth_time) * 1000)));
  //   .then((user) => console.log(user.claims.exp));
  // console.log(Math.floor(Date.now() / 1000));

  // auth.onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log(user);
  //   }
  // });
  // console.log('timeToken', timeToken);
  console.log(timeToken);
  return userValid && timeToken ? (
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
