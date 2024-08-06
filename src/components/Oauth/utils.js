import { jwtDecode } from 'jwt-decode';

export const decodeJwtToken = (token, fields = []) => {
	const decodedToken = jwtDecode(token);
	if (fields.length === 0) {
		return decodedToken;
	}
	const filteredToken = {};
	fields.forEach((field) => {
		if (decodedToken[field]) {
			filteredToken[field] = decodedToken[field];
		}
	});
	return filteredToken;
};
