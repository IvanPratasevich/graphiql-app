import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const SignIn = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  function hiddenPopup() {
    setTimeout(() => {
      close();
      setText('');
    }, 3000);
  }
  const handelLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch(() => {
        open();
        setText('You have entered an incorrect login or password');
        hiddenPopup();
      });
  };
  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Sign-in">
        {text}
      </Modal>
      <Form title="Sign-in" handleClick={handelLogin} />
    </>
  );
};
