import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';

const App = () => (
  <div>
    <Route exact path="/" component={Login} />
  </div>
);

export default App;
