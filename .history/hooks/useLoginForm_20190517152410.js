/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */

import { useState } from 'react';

const useLoginForm = callback => {
	const [values, setValues] = useState({});
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	handleOnclick = () => {
		callback();
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
		isLoading,
		handleOnChangeValue,
		handleOnlogin
	};
};

export default useLoginForm;
