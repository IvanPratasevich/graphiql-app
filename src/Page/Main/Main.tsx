import { auth } from '../../firebase/firebase';

export const Main = () => {
  return (
    <div>
      <button
        onClick={() => {
          auth.signOut();
          console.log(auth.currentUser?.email);
        }}
      >
        Logout
      </button>
    </div>
  );
};
