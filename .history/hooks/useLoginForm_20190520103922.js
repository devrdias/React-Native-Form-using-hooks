/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */

import { useState, useEffect } from 'react';

const useLoginForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// useEffect replaces the componentDidMount and componentDidUpdate lifecyle methods in React Class components
	useEffect(() => {
		debugger;
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
			setIsLoggedIn(true);
		}
	}, [errors]);

	handleSubmit = () => {
		debugger;
		setIsSubmitting(true); // prevents the Form from submiting on Render
		console.debug(values);
		setErrors(validate(values));
	};

	handleOnChangeValue = fieldName => text => {
		setValues({ ...values, [fieldName]: text });
	};

	return {
		values,
		message,
		errors,
		isSubmitting,
		handleOnChangeValue,
		handleSubmit
	};
};

export default useLoginForm;
