/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */

import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	handleOnclick = () => {
		callback();
	};

	handleOnChangeUsername = username => {
		setUsername(username);
	};
	handleOnChangePassword = password => {
		setPassword(password);
	};
	handleOnlogin = message => {
		setMessage(message);
	};

	return {
		username,
		password,
		message,
		handleOnChangeUsername,
		handleOnChangePassword,
		handleOnlogin
	};
};

export default useLoginForm;
