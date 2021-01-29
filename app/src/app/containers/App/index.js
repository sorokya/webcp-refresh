import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header';

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route path="/">
        &nbsp;
      </Route>
    </Switch>
  </Container>
);

export default App;
