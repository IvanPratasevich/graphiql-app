import { Navigate, Routes, Route } from 'react-router';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter/AppRouter';
import { LoaderWrapper } from './components/LoaderWrapper/LoaderWrapper';
import Footer from './components/Footer/Footer';

// const res = auth.currentUser?.getIdTokenResult();

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Header />
      <Suspense fallback={<LoaderWrapper />}>
        {loading ? <LoaderWrapper /> : <AppRouter />}
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
