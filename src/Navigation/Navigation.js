import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from '../components/Body/Body';
import Header from '../components/Header/Header';

const Navigation = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Body} />
      <Route exact path='/' component={Body} />
    </Switch>
  </>
);

export default Navigation;
