import React from "react";
import {  Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Layout/auth/login/index";
import Dashboard from "../Layout/app";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      {/* <Route exact path='/forgotPassword' component={ForgotPassword} />: */}
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <Route exact path='/*' component={LoginPage} />
    </Switch>
  );
};

export default Routes;
