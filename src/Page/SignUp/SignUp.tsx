import { Form } from '../../components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';

const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handelRegister = (email: string, password: string) => {
    const auth = getAuth();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('user', user.uid);
        navigate('/');
        open();
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setText('email already in use.');
        } else {
          setText(error.message);
        }
        open();
        setLoading(false);
      });
  };
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} title="Sign-up" yOffset={300}>
        {text}
      </Modal>
      {loading ? <LoaderWrapper /> : <Form title="Sign-up" handleClick={handelRegister} />}
    </>
  );
};
export default SignUp;
