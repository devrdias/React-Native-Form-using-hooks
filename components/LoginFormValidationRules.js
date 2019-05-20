const validate = ({ username, password }) => {
	const errors = {};
	if (!username) {
		console.log('username: ', username);
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(username)) {
		errors.email = 'Email address is invalid';
	}

	if (!password) {
		errors.password = 'Password is required';
	}

	return errors;
};

export default validate;
