import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React, { useState } from 'react';
import useLoginForm from '../hooks/useLoginForm';
import useUserLogged from '../hooks/useUserLogged';

const LoginForm = () => {
	login = () => {
		return (
			<View>
				<Text>Username: {usernamse}</Text>
				<Text>Password: {password}</Text>
			</View>
		);
	};

	const {
		username,
		password,
		handleOnclick,
		handleOnChangeUsername,
		handleOnChangePassword
	} = useLoginForm(login);

	const { message, handleLogin } = useUserLogged();

	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={username} onChangeText={handleOnChangeUsername} />
				</Item>
				<Item floatingLabel last style={{ paddingTop: 10 }}>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input secureTextEntry={true} value={password} onChangeText={handleOnChangePassword} />
				</Item>
			</View>
			<View style={{ padding: 40 }}>
				<Button block first onClick={handleOnclick}>
					<Text>Login</Text>
				</Button>
			</View>
		</Form>
	);
};

export default LoginForm;
