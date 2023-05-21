import { FC, useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { Burger, Drawer, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Header: FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);

  const [opened, { toggle, close }] = useDisclosure(false);

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
          <Navigation hidden={false} opened={opened} />
          <Burger
            size="lg"
            color="#ffff00"
            opened={false}
            onClick={toggle}
            className={styles.header__burger}
          />

          <Modal
            opened={opened}
            onClose={close}
            fullScreen
            transitionProps={{ transition: 'fade', duration: 1600, timingFunction: 'linear' }}
          >
            <div
              className={styles.modal__container}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });

                close();
              }}
            >
              <Navigation hidden={true} opened={opened} />
            </div>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
