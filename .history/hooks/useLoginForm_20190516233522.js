import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);

	handleSubmit = () => {
		setPassword(password);

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
		setUsername,
		setPassword
	};
};

export default useLoginForm;
