import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GraphQL } from '../type/schemas';

const URL = 'https://rickandmortyapi.com/graphql';

// async function responseShema() {
//   const data: IntrospectionQuery = await request(
//     'https://rickandmortyapi.com/graphql',
//     getIntrospectionQuery()
//   );
//   setSchemas(data.__schema);
//   buildClientSchema(data);
// }
// responseShema();

// export const cardsSchemas = createApi({
//   reducerPath: 'schemasAPI',
//   baseQuery: fetchBaseQuery({ baseUrl: URL }),

//   // endpoints: (builder) => ({
//   //   getPokemonByName: builder.query<GraphQL, string>({
//   //     query: (name) => `pokemon/${name}`,
//   //   }),

//   endpoints: (builder) => ({
//     fetchAllPersons: builder.<GraphQL, void>({
//       query: () => 'schema'
//     }),
//   }),
// });
