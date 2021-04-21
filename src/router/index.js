import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../screens/_shared/Layout';
import User from '../screens/User';
import Users from '../screens/users';
import NotFound from '../screens/NotFound';

const AppRouter = () =>
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/user/:id" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </Router>;

export default AppRouter;
