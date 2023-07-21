const BASE_URL = 'https://reqres.in/api';

export const fetchTemplate = ({ path, method, body, token = '' }) =>
	fetch(`${BASE_URL}${path}`, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: token,
		},
		body: JSON.stringify(body),
	});
