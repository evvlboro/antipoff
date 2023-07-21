import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const PublicRoute = ({ children }) => {
	const isAuthenticated = !!localStorage.getItem('token');

	return isAuthenticated ? <Navigate to={ROUTES.ROOT} replace /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
