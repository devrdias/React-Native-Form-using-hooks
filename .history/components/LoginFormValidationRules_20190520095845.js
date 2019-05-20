const validate = values => {
	debugger;
	const errors = {};
	if (!values.email) {
		console.log('values.email: ', values.email);
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	}

	return errors;
};

export default validate;
