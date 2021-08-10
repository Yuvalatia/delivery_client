import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import { Login, OrdersPanel } from './pages';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/panel" component={OrdersPanel} />
        <Route path="/" component={Login} /> { /* to be changed */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
