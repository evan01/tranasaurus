import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import Main from './containers/Main';

const App = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/main" component={Main} />
  </div>
);

export default App;
