import { FC } from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';
import { Avatar } from '@mantine/core';
import FooterLogo from '../FooterLogo/FooterLogo';

const Footer: FC = () => {
  return (
    <footer className={'footer'}>
      <div className={`${styles.footer__container}`}>
        <Logo />
        <FooterLogo />
        <Avatar.Group spacing="sm">
          <Avatar
            size="lg"
            src="https://avatars.githubusercontent.com/u/85807287?v=4"
            alt="Ivan"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/IvanPratasevich"
          />
          <Avatar
            size="lg"
            alt="Vitali"
            src="https://avatars.githubusercontent.com/u/79810929?v=4"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/vitalisavelyev"
          />
          <Avatar
            size="lg"
            alt="Sergey"
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
