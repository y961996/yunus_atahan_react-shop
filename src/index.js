import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CategoryPage from './pages/CategoryPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <CategoryPage></CategoryPage>
    </React.StrictMode>
  </ApolloProvider>
);