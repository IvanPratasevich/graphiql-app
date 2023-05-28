import { FC, useState } from 'react';
import { Flex, Title, Text, Box, Spoiler } from '@mantine/core';
import UserCards from '../../components/UserCards/UserCards';
import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.scss';

const Welcome: FC = () => {
  const { t } = useTranslation();
  const [clicked, isClicked] = useState<boolean>(false);

  return (
    <main className={`${styles.main}`}>
      <div className="container">
        <Flex gap="3em" align="center" direction="column">
          <Flex
            style={{ marginTop: '60px' }}
            w="100%"
            gap="lg"
            justify="space-between"
            align="center"
            wrap="wrap"
            className={styles.information}
          >
            <Flex gap="md" align="center" direction="column" wrap="wrap">
              <Title align="center" order={2}>
                GraphiQL
              </Title>
              {!clicked ? (
                <img
                  src="/src/assets/ytb_yellow.jpg"
                  onClick={() => isClicked(true)}
                  className={`${styles.video} ${styles.ytbImage}`}
                  alt={t('ytb_video')!}
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/voXuPwroEg8"
                  title={t('ytb_video')!}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              )}
            </Flex>
            <Box className={styles.description}>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <Text size="xl">{t('app_description')}</Text>
              </Spoiler>
            </Box>
          </Flex>
          <Flex
            gap="xl"
            justify="space-between"
            align="center"
            direction="row"
            className={styles.authors}
          >
            <UserCards />
          </Flex>
        </Flex>
      </div>
    </main>
  );
};

export default Welcome;
