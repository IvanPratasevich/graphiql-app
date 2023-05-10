import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const SignIn = () => {
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
    setText('🌀 Loading... Data processing is underway...');
    open();
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
      <Modal opened={opened} onClose={close} size="auto" title="Sign-in" yOffset={300}>
        {text}
      </Modal>
      <Form title="Sign-in" handleClick={handelLogin} />
    </>
  );
};
export default SignIn;
