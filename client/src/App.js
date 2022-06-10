import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';

const App = () => {
  return (
    // <h1>hello world</h1>
    <BrowserRouter>
      <Container maxWidth="lg">
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
