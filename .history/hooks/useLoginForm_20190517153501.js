/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */

import { useState, useEffect } from 'react';

const useLoginForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// useEffect replaces the componentDidMount and componentDidUpdate lifecyle methods in React Class components
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	handleSubmit = () => {
		setIsSubmitting(true); // prevents the Form from submiting on Render
		setErrors(validate(values));
	};

	handleOnChangeValue = value => {
		setValues(value);
	};
	handleOnlogin = message => {
		setMessage(message);
	};

	return {
		values,
		message,
		errors,
		isSubmitting,
		handleOnChangeValue,
		handleOnlogin
	};
};

export default useLoginForm;
