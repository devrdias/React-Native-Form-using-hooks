/** 
 * Name convention for React Hooks - typing 'use' infront of the 
 * component name, so React knows that is a Hook
 */
import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	handleOnclick = () => {
		callback();
	};

	handleOnChangeUsername = username => {
		debugger;
		setUsername(username);
	};
	handleOnChangePassword = password => {
		debugger;
		setPassword(password);
	};

	return {
		username,
		password,
		handleOnChangeUsername,
		handleOnChangePassword
	};
};

export default useLoginForm;
