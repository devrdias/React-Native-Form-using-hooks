import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);

	handleSubmit = () => {
		callback();
	};

	handleOnChangeUsername = username => {
		setUsername(username);
	};
	handleOnChangePassword = password => {
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
