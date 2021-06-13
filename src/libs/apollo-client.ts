import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  QueryOptions,
} from '@apollo/client';

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});

export const clientQuery = ({
  fetchPolicy = 'no-cache',
  query,
  ...props
}: QueryOptions) => {
  return client.query({
    query,
    fetchPolicy,
    ...props,
  });
};
