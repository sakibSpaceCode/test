import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.isLoggedIn);

  return <Route render={(props) => (isLoggedIn ? <Component {...props} {...rest} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.any,
};
