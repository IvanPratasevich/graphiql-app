import { Card, Badge, Button, Image, Text, Flex, Group } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IUser {
  id: number;
  name: string;
  githubUrl: string;
  imageUrl: string;
  description: string;
  badges: string[];
  colors: string[];
  github: string;
}

const UserCard: FC<{ data: IUser }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Card padding="lg" shadow="md" withBorder>
        <Card.Section>
          <Image
            style={{ objectPosition: 'bottom' }}
            src={data.imageUrl}
            height={294}
            alt={data.name}
          />
        </Card.Section>

        <Flex mb="md" justify="space-between" mt="md" align="center" wrap="wrap" gap="1rem">
          <Text size="lg" weight={500}>
            {data.name}
          </Text>
          <Group position="apart">
            {data.badges.map((badge, idx) => (
              <Badge key={idx + 1} color={data.colors[idx]} variant="light" size="md">
                {badge}
              </Badge>
            ))}
          </Group>
        </Flex>

        <Text size="md" color="#868E96">
          {t('team_member_description')}
        </Text>

        <Button
          component="a"
          target="_blank"
          href={data.githubUrl}
          leftIcon={<IconBrandGithub />}
          mt="md"
          variant="outline"
          fullWidth
        >
          {`${data.github}`}
        </Button>
      </Card>
    </>
  );
};

export default UserCard;
