import React from "react";
import { Switch } from "react-router-dom";
import pageBreadcrumbsMappings from "../components/breadcrumbs/page-breadcrumbs-mappings";
import CommonPage from "../pages/commonPage";
import DashboardPage from "../pages/dashboard";
import EmployeesPage from "../pages/employees";
import ProfilePage from "../pages/Profile";
import ProjectDetails from "../pages/projectDepartment";
import PurchaseDepartment from "../pages/purchaseDepartment";
import RetroPlanPage from "../pages/retroPlan";
import RetroTimeLine from "../pages/retroPlan/timeline";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  let mOption = pageBreadcrumbsMappings();
  return (
    <Switch>
      {mOption.map((item, index) =>
        item.name === "/dashboard/employees" ? (
          <PrivateRoute
            exact
            path="/dashboard/employees"
            data={item.breadcrumbs}
            component={EmployeesPage}
            key={item.name}
          />
        ) : item.name === "/dashboard/retro-plan" ? (
          <PrivateRoute
            exact
            path="/dashboard/retro-plan"
            component={RetroPlanPage}
            key={item.name}
            data={item.breadcrumbs}
          />
        ) : item.name === "/dashboard/clients" ? (
          <PrivateRoute
            exact
            path="/dashboard/clients"
            component={DashboardPage}
            key={item.name}
          />
        ) : item.name === "/dashboard/purchace-department" ? (
          <PrivateRoute
            exact
            path="/dashboard/purchace-department"
            component={PurchaseDepartment}
            key={item.name}
          />
        ) : item.type === "common" ? (
          <PrivateRoute
            exact
            path={item.name}
            data={item.breadcrumbs}
            component={CommonPage}
            key={item.name}
          />
        ) : item.name === "/dashboard/project-department" ? (
          <PrivateRoute
            exact
            data={item.breadcrumbs}
            path="/dashboard/project-department"
            component={ProjectDetails}
            key={item.name}
          />
        ) : item.name === "/dashboard/profile" ? (
          <PrivateRoute
            path={"/dashboard/profile"}
            exact
            // add new id to the data itself
            component={ProfilePage}
          />
        ) : (
          <PrivateRoute
            path={item.name}
            exact
            key={item.id || index} // add new id to the data itself
            component={DashboardPage}
          />
        )
      )}
      <PrivateRoute
        path={"/dashboard/retro-plan/:id"}
        exact
        // add new id to the data itself
        component={RetroTimeLine}
      />
    </Switch>
  );
};

export default AppRoutes;
