import { FC } from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from '@mantine/core';
import { NavLink as NavLinkReactRotuter } from 'react-router-dom';
import { IconHome2, IconUser, IconKey } from '@tabler/icons-react';
import { useLocation } from 'react-router';

const Navigation: FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={`${styles.navigation}`}>
      <NavLinkReactRotuter to="/welcome">
        <NavLink
          label="Welcome"
          active={pathname === '/welcome'!}
          icon={<IconHome2 size="1.5rem" stroke={1.5} />}
        />
      </NavLinkReactRotuter>

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
    </nav>
  );
};

export default Navigation;
