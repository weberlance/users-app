import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from '../screens/User';
import Users from '../screens/users';
import NotFound from '../screens/NotFound';

const AppRouter = () =>
  <Router>
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/user/:id" component={User} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>;

export default AppRouter;
