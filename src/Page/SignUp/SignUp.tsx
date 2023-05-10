import { Form } from '../../components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Title } from '@mantine/core';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handelRegister = (email: string, password: string) => {
    const auth = getAuth();

    setText('🌀 Loading... Data processing is underway...');
    open();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('user', user.uid);
        navigate('/');
        open();
      })
      .catch(() => {
        open();
        setText('This email has already been registered');
      });
  };
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} title="Sign-up" yOffset={300}>
        {text}
      </Modal>
      <Form title="Sign-up" handleClick={handelRegister} />
    </>
  );
};
export default SignUp;
