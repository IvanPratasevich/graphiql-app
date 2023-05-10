import { Navigate, Routes, Route } from 'react-router';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './firebase/firebase';
import { Loader } from '@mantine/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Suspense } from 'react';

import { privateRoutes, publicRoutes } from '../router';
import { SIGNUP_ROUTE, MAIN_ROUTE } from './utils/consts';
import Header from './components/Header/Header';
import { useState } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { LoaderWrapper } from './components/LoaderWrapper/LoaderWrapper';
import Footer from './components/Footer/Footer';

// const res = auth.currentUser?.getIdTokenResult();

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <LoaderWrapper />;
  }
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <Header />
      <AppRouter />
      <Footer />
    </Suspense>
  );
}

export default App;
