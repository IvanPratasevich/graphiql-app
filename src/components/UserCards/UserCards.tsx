import { FC } from 'react';
import UserCard from '../UserCard/UserCard';
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

const UserCards: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {(t('users', { returnObjects: true }) as IUser[]).map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </>
  );
};

export default UserCards;
