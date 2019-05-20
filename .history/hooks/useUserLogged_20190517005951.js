/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */
import { useState } from 'react';

const useUserLogged = callback => {
	const [message, setMessage] = useState('');

	handleOnclick = () => {
		callback();
	};

	handleOnChangeUsername = username => {
		setUsername(username);
	};

	return {
		message,
		handleLogin
	};
};

export default useUserLogged;
