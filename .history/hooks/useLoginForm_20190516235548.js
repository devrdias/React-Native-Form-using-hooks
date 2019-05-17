import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	handleSubmit = () => {
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
