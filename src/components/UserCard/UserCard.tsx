import { Card, Badge, Button, Image, Text, Flex, Group } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { FC } from 'react';

interface IUser {
  id: number;
  name: string;
  githubUrl: string;
  imageUrl: string;
  description: string;
  badges: string[];
  colors: string[];
}

const UserCard: FC<{ data: IUser }> = ({ data }) => {
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

        <Flex mb="md" justify="space-between" mt="md" align="center">
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
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
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
          {`${data.name} Github`}
        </Button>
      </Card>
    </>
  );
};

export default UserCard;
