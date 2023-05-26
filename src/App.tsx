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
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [opened, { open, close }] = useDisclosure(false);

  window.addEventListener('offline', () => {
    open();
  });
  window.addEventListener('online', () => {
    close();
  });
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} title="Connect" yOffset={300}>
        {'Disconnect'}
      </Modal>
      <Header />
      <Suspense fallback={<LoaderWrapper />}>
        {loading ? <LoaderWrapper /> : <AppRouter />}
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
