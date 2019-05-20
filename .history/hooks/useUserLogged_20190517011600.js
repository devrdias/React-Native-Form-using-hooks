/**
 * Name convention for React Hooks - typing 'use' infront of the
 * component name, so React knows that is a Hook
 */
import React, { useState } from 'react';

const useUserLogged = callback => {
	const [message, setMessage] = useState('');

	handleLogin = () => {
		setMessage('Welcome to React Hooks!!');
	};

	return {
		message,
		handleLogin
	};
};

export default useUserLogged;
