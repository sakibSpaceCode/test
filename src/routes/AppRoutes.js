import React from "react";
import { Switch } from "react-router-dom";
import pageBreadcrumbsMappings from "../components/breadcrumbs/page-breadcrumbs-mappings";
import DashboardPage from "../pages/dashboard";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  let mOption = pageBreadcrumbsMappings();
  console.log(mOption);
  return (
    <Switch>
      <PrivateRoute path="/dashboard/employees" component={DashboardPage} />

      <PrivateRoute exact path="/dashboard/clients" component={DashboardPage} />

      <PrivateRoute
        exact
        path="/dashboard/design-department/design-details"
        component={DashboardPage}
      />

      <PrivateRoute
        exact
        path="/dashboard/design-department/checklist"
        component={DashboardPage}
      />
      <PrivateRoute
        exact
        path="/dashboard/design-department/corrective-action"
        component={DashboardPage}
      />
      <PrivateRoute
        exact
        path="/dashboard/design-department/daily-updates"
        component={DashboardPage}
      />
    </Switch>
  );
};

export default AppRoutes;
