import { Form } from '../../components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

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
          const textLock = t('email_already_in_use');
          setText(textLock);
        } else {
          setText(error.message);
        }
        open();
        setLoading(false);
      });
  };
  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Sign-up" yOffset={200}>
        <div style={{ padding: 50 }}>{text}</div>
      </Modal>
      {loading ? <LoaderWrapper /> : <Form title={t('sign_up')} handleClick={handelRegister} />}
    </>
  );
};
export default SignUp;
