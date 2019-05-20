const validate = () => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Email address is required';
	}

	return errors;
};

export default validate;
