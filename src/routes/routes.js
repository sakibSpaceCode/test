import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Layout/auth/login";
import Dashboard from "../Layout/app";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/*" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
