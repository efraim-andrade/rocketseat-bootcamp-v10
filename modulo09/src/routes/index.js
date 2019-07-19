import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Profile, SignIn, SignUp } from '../pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
