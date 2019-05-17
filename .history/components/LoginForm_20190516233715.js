import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React from 'react';
import useLoginForm from '../hooks/useLoginForm';

const LoginForm = () => {
	const {
		username,
		password,
		handleSubmit,
		handleOnChangeUsername,
		handleOnChangePassword
	} = useLoginForm();
	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={username} onChangeText={handleOnChangeUsername} />
				</Item>
				<Item floatingLabel last>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input value={password} onChangeText={handleOnChangePassword} />
				</Item>
			</View>
			<View style={{ padding: 40 }}>
				<Button block first onClick={handleSubmit}>
					<Text>Login</Text>
				</Button>
			</View>
		</Form>
	);
};

export default LoginForm;
