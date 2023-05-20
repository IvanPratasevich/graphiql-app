import styles from './Navigation.module.scss';
import { Button, NavLink } from '@mantine/core';
import { NavLink as NavLinkReactRotuter } from 'react-router-dom';
import { IconHome2, IconUser, IconKey, IconLogout, IconGraph } from '@tabler/icons-react';
import { useLocation } from 'react-router';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useMediaQuery } from '@mantine/hooks';

const Navigation = ({ hidden, opened }: { hidden: boolean; opened: boolean }) => {
  const { pathname } = useLocation();
  const str = useAuthState(auth);
  const userValid = !!str[0]?.email;
  const isMobile = useMediaQuery('(max-width: 729px)');

  const navStyles = {
    burger: `navigation_hidden ${styles.navigation}`,
    desktop: styles.navigation,
    burgerOpened: `${styles.burger_opened} ${styles.navigation}`,
    navStyle: '',
  };

  const { burger, desktop, burgerOpened } = navStyles;

  if (opened) {
    navStyles.navStyle = burgerOpened;
  } else {
    if (!hidden && isMobile) {
      navStyles.navStyle = burger;
    } else {
      navStyles.navStyle = desktop;
    }
  }

  return (
    <nav className={navStyles.navStyle}>
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
        <>
          <NavLinkReactRotuter to="/main">
            <NavLink
              label="Main"
              active={pathname === '/main'!}
              icon={<IconGraph size="1.5rem" stroke={1.5} />}
            />
          </NavLinkReactRotuter>
          <Button
            variant="subtle"
            color="gray"
            size="md"
            onClick={() => {
              auth.signOut();
            }}
            leftIcon={<IconLogout size="1.5rem" stroke={1.5} />}
          >
            Sign out
          </Button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
