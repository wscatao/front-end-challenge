import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Internal from './pages/Internal';

const App = () => {
  return (
    <Switch>
      <Route path="/internal/:slug" component={Internal} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
