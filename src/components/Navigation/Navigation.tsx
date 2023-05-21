import styles from './Navigation.module.scss';
import {
  Button,
  Drawer,
  Flex,
  Loader,
  Modal,
  NavLink,
  Switch,
  useMantineTheme,
} from '@mantine/core';
import { NavLink as NavLinkReactRotuter } from 'react-router-dom';
import {
  IconHome2,
  IconUser,
  IconKey,
  IconLogout,
  IconGraph,
  IconLanguage,
} from '@tabler/icons-react';
import { useLocation } from 'react-router';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Navigation = ({ hidden, opened }: { hidden: boolean; opened: boolean }) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const str = useAuthState(auth);
  const userValid = !!str[0]?.email;
  const isMobile = useMediaQuery('(max-width: 729px)');

  const [languageLoading, setLanguageLoading] = useState<boolean>(false);

  const handleLanguage = () => {
    setLanguageLoading(true);
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  useEffect(() => {
    setTimeout(() => {
      setLanguageLoading(false);
    }, 500);
  }, [i18n.language]);

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
      {languageLoading &&
        createPortal(
          <Modal opened={true} size="100%" onClose={(): void => {}}>
            <Flex align="center" justify="center" style={{ height: '100vh' }}>
              <Loader color="cyan" size="xl" variant="bars" />
            </Flex>
          </Modal>,
          document.body
        )}

      <NavLink
        label={t('current_lng').toUpperCase()}
        icon={<IconLanguage size="1.5rem" stroke={1.5} />}
        onClick={handleLanguage}
      />
      <NavLinkReactRotuter to="/welcome">
        <NavLink
          label={t('welcome')}
          active={pathname === '/welcome'!}
          icon={<IconHome2 size="1.5rem" stroke={1.5} />}
        />
      </NavLinkReactRotuter>
      {!userValid ? (
        <>
          <NavLinkReactRotuter to="/sign-in">
            <NavLink
              label={t('sign_in')}
              active={pathname === '/sign-in'!}
              icon={<IconUser size="1.5rem" stroke={1.5} />}
            />
          </NavLinkReactRotuter>

          <NavLinkReactRotuter to="/sign-up">
            <NavLink
              label={t('sign_up')}
              active={pathname === '/sign-up'!}
              icon={<IconKey size="1.5rem" stroke={1.5} />}
            />
          </NavLinkReactRotuter>
        </>
      ) : (
        <>
          <NavLinkReactRotuter to="/main">
            <NavLink
              label={t('main')}
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
            {t('sign_out')}
          </Button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
