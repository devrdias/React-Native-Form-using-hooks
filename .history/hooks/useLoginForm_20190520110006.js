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
		if (Object.keys(errors).length === 0 && isSubmitting && !isLoggedIn) {
			console.log('entrou aqui');
			callback();
			setIsLoggedIn(true);
			setIsSubmitting(false);
		}
	}, [errors]);

	handleSubmit = () => {
		debugger;
		setIsSubmitting(true); // prevents the Form from submiting on Render
		console.debug(values);
		if (setErrors(validate(values))) {
			setIsSubmitting(false);
		}
	};

	handleOnChangeValue = fieldName => text => {
		setValues({ ...values, [fieldName]: text });
	};

	return {
		values,
		errors,
		isLoggedIn,
		isSubmitting,
		handleOnChangeValue,
		handleSubmit
	};
};

export default useLoginForm;
