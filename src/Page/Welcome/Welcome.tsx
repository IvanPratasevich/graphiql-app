import { FC } from 'react';
import { Flex, Title, Text, Box, Spoiler } from '@mantine/core';
import UserCards from '../../components/UserCards/UserCards';
import styles from './Welcome.module.scss';

const Welcome: FC = () => {
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
            direction="row"
            wrap="wrap"
          >
            <Flex
              style={{ alignSelf: 'flex-start' }}
              gap="md"
              justify="flex-start"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Title align="center" order={2}>
                GraphiQL
              </Title>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eIQh02xuVw4?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Flex>
            <Box w={'50%'}>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <Text size="xl">
                  GraphiQL is a user-friendly IDE for testing GraphQL APIs. It provides a graphical
                  interface for constructing and executing queries, mutations, and subscriptions in
                  real-time. GraphiQL supports syntax highlighting, error highlighting, and code
                  snippets, making it easy to work with GraphQL APIs. Overall, GraphiQL streamlines
                  the process of testing and debugging GraphQL APIs, saving developers time and
                  effort. One of the key benefits of GraphiQL is its ability to provide a schema
                  documentation for the GraphQL API. This documentation can be viewed directly in
                  the GraphiQL interface, allowing developers to quickly and easily understand the
                  structure and capabilities of the API. This can be especially helpful when working
                  with large or complex APIs, where understanding the schema can be a challenge.
                  Another advantage of GraphiQL is its support for multiple programming languages
                  and frameworks. It can be used with JavaScript, Python, Ruby, Java, and many other
                  languages and frameworks, making it a versatile tool for developers working in a
                  wide range of environments. GraphiQL also supports collaborative development
                  workflows, allowing multiple developers to work on the same API at the same time.
                  This can be achieved through the use of version control systems like Git, or by
                  using tools like Apollo Studio, which provides a shared workspace for GraphQL
                  development. In summary, GraphiQL is a powerful and versatile tool that simplifies
                  the process of working with GraphQL APIs. Its user-friendly interface, advanced
                  features, and flexibility make it an essential tool for developers who want to
                  work more efficiently and effectively with GraphQL APIs.
                </Text>
              </Spoiler>
            </Box>
          </Flex>
          <Flex w="100%" gap="xl" justify="space-between" align="center" direction="row">
            <UserCards />
          </Flex>
        </Flex>
      </div>
    </main>
  );
};

export default Welcome;
