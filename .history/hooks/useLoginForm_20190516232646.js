import { useState } from 'react';

const useLoginForm = callback => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);

	handleOnClick = () => {};

	return {
		username,
		password,
		setUsername,
		setPassword
	};
};

export default useLoginForm;
