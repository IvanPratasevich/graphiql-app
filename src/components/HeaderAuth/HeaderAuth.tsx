import { FC } from 'react';
import styles from './HeaderAuth.module.scss';
import { Button } from '@mantine/core';

const HeaderAuth: FC = () => {
  return (
    <div className={`${styles.header__auth}`}>
      {/* <Button color="violet" radius="md" size="md">
        Sign in
      </Button>

      <Button color="indigo" radius="md" size="md">
        Sign Up
      </Button> */}

      <Button color="red" radius="md" size="md">
        Sign out
      </Button>
    </div>
  );
};

export default HeaderAuth;
