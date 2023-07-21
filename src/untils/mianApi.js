import { fetchTemplate } from '../constants';

export const register = ({ email, password }) =>
	fetchTemplate({
		path: '/register',
		method: 'POST',
		body: {
			email,
			password,
		},
	});

export const login = ({ email, password }) =>
	fetchTemplate({
		path: '/login',
		method: 'POST',
		body: {
			email,
			password,
		},
	});
