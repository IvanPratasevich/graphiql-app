import { FC } from 'react';
import UserCard from '../UserCard/UserCard';

const UserCards: FC = () => {
  const users = [
    {
      id: 1,
      name: 'Ivan',
      githubUrl: 'https://github.com/IvanPratasevich',
      imageUrl: 'https://avatars.githubusercontent.com/u/85807287?v=4',
      description: `With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway`,
      badges: ['developer', 'team lead'],
      colors: ['cyan', 'red'],
    },

    {
      id: 2,
      name: 'Vitali',
      githubUrl: 'https://github.com/vitalisavelyev',
      imageUrl: 'https://avatars.githubusercontent.com/u/79810929?v=4',
      description: `With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway`,
      badges: ['developer', 'software architect'],
      colors: ['cyan', 'yellow'],
    },

    {
      id: 3,
      name: 'Sergey',
      githubUrl: 'https://github.com/sergey-lesnevskiy',
      imageUrl: 'https://avatars.githubusercontent.com/u/78030028?v=4',
      description: `With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway`,
      badges: ['developer', 'firebase'],
      colors: ['cyan', 'orange'],
    },
  ];

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </>
  );
};

export default UserCards;
