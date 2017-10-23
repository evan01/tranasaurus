import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from './containers/Login';
import Main from './containers/Main';

const App = () => (
  <div>
    <Route exact path="/" component={withRouter(Main)} />
  </div>
);
/* <Route exact path="/main" component={Main} /> */
export default App;
