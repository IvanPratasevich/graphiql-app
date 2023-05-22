import { FC } from 'react';
import styles from './HeaderAuth.module.scss';
import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const HeaderAuth: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.header__auth}`}>
      {/* <Button color="violet" radius="md" size="md">
        Sign in
      </Button>

      <Button color="indigo" radius="md" size="md">
        Sign Up
      </Button> */}

      <Button color="red" radius="md" size="md">
        {t('sign_out')}
      </Button>
    </div>
  );
};

export default HeaderAuth;
