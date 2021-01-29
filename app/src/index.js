import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import './style.scss';

import App from './app/containers/App';

const client = new ApolloClient({
  uri: '/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Helmet titleTemplate="%s | WebCP" />
        <App />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
