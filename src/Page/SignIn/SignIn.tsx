import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';

const SignIn = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handelLogin = (email: string, password: string) => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
        setLoading(false);
      })
      .catch((error) => {
        if (error.code == 'auth/wrong-password') {
          setText('wrong password');
        } else if (error.code == 'auth/user-not-found') {
          setText('user not found');
        } else {
          setText(error.message);
        }
        open();
        setLoading(false);
      });
  };
  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Sign-in" yOffset={300}>
        {text}
      </Modal>
      {loading ? <LoaderWrapper /> : <Form title="Sign-up" handleClick={handelLogin} />}
    </>
  );
};
export default SignIn;
