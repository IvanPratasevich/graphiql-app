import { FC } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
  return (
    <header className={`${styles.header}`}>
      <Logo />
      <Navigation />
      {/* <HeaderAuth /> */}
    </header>
  );
};

export default Header;
