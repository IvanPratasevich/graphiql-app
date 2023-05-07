import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../componenets/form/Form';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();
  const handelLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user.uid);
        console.log('нужно сохранить в стор');
        navigate('/main');
      })
      .catch(() => alert('Invalid user'));
  };
  return <Form title="login" handleClick={handelLogin} />;
};
