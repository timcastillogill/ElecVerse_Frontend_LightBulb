import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.DB_HOST,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
