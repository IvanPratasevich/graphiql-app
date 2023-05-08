import { Form } from '../../components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Title } from '@mantine/core';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

  const handelRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('user', user.uid);
        navigate('/');
        open();
      })
      .catch(() => {
        open();
      });
  };
  return (
    <>
      {/* нужно будет обернуть в div */}
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        This email has already been registered
      </Modal>
      <Form title="Sign-up" handleClick={handelRegister} />
    </>
  );
};
