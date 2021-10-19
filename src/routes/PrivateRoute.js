import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const  isLoggedIn  = true

    return <Route render={(props) => ( <Component {...props} {...rest} /> )} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    component: PropTypes.any
};
