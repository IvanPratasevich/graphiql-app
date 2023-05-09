import { FC, useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);

  const handleScroll = (): void => (window.pageYOffset > 0 ? setSticky(true) : setSticky(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={'header'}>
      <div className={`${styles.header__container}`}>
        <div
          className={
            sticky
              ? `${styles.header__wrapper} ${styles.header__wrapper_sticky}`
              : `${styles.header__wrapper}`
          }
        >
          <Logo />
          <Navigation />
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
};

export default Header;
