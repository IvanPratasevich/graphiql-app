import { FC } from 'react';
import styles from './Navigation.module.scss';
import { Button, NavLink } from '@mantine/core';
import { NavLink as NavLinkReactRotuter } from 'react-router-dom';
import { IconHome2, IconUser, IconKey } from '@tabler/icons-react';
import { useLocation } from 'react-router';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigation: FC = () => {
  const { pathname } = useLocation();
  const str = useAuthState(auth);
  const userValid = !!str[0]?.email;
  return (
    <nav className={`${styles.navigation}`}>
      <NavLinkReactRotuter to="/welcome">
        <NavLink
          label="Welcome"
          active={pathname === '/welcome'!}
          icon={<IconHome2 size="1.5rem" stroke={1.5} />}
        />
      </NavLinkReactRotuter>
      {!userValid ? (
        <>
          <NavLinkReactRotuter to="/sign-in">
            <NavLink
              label="Sign in"
              active={pathname === '/sign-in'!}
              icon={<IconUser size="1.5rem" stroke={1.5} />}
            />
          </NavLinkReactRotuter>

          <NavLinkReactRotuter to="/sign-up">
            <NavLink
              label="Sign up"
              active={pathname === '/sign-up'!}
              icon={<IconKey size="1.5rem" stroke={1.5} />}
            />
          </NavLinkReactRotuter>
        </>
      ) : (
        <Button
          variant="subtle"
          color="gray"
          size="md"
          onClick={() => {
            auth.signOut();
          }}
          leftIcon={<IconKey size="1.5rem" stroke={1.5} />}
        >
          Sign out
        </Button>
      )}
    </nav>
  );
};

export default Navigation;