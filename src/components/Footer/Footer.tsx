import { FC } from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';
import { Avatar } from '@mantine/core';
import FooterLogo from '../FooterLogo/FooterLogo';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={'footer'}>
      <div className={`${styles.footer__container}`}>
        <Logo />
        <FooterLogo />
        <Avatar.Group spacing="sm">
          <Avatar
            size="lg"
            src="https://avatars.githubusercontent.com/u/85807287?v=4"
            alt={t('ivan')!}
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/IvanPratasevich"
          />
          <Avatar
            size="lg"
            alt={t('vitali')!}
            src="https://avatars.githubusercontent.com/u/79810929?v=4"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/vitalisavelyev"
          />
          <Avatar
            size="lg"
            alt={t('sergey')!}
            src="https://avatars.githubusercontent.com/u/78030028?v=4"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/sergey-lesnevskiy"
          />
        </Avatar.Group>
      </div>
    </footer>
  );
};

export default Footer;
