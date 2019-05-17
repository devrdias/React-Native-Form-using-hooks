import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);

	handleSubmit = () => {
		setUsername(username);
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
