import { Form } from '../../componenets/form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate();
  const handelRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        console.log('нужно соохранять в стейт');
        console.log(user.uid);
        localStorage.setItem('user', user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      register
      <Form title="register" handleClick={handelRegister} />
    </>
  );
};
