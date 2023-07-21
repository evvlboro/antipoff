import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const PrivateRoute = ({ children }) => {
	const isAuthenticated = !!localStorage.getItem('token');

	return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} replace />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
