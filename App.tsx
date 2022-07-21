import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Home from './src/screens/Signup';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:5000',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
