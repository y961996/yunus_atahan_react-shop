import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CategoryPage from './pages/CategoryPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './redux/Reducers';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const store = createStore(Reducers.addItemToCartReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <React.StrictMode>
        <CategoryPage></CategoryPage>
      </React.StrictMode>
      </Provider>
  </ApolloProvider>
);