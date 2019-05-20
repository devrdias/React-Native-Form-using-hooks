import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React from 'react';
import useLoginForm from '../hooks/useLoginForm';
import validate from './LoginFormValidationRules';

const LoginForm = () => {
	const {
		values,
		message,
		errors,
		handleSubmit,
		handleOnChangeUsername,
		handleOnChangePassword
	} = useLoginForm(login, validate);

	const login = () => {
		console.info('You have just logged in ! React Hooks Rocks !!!');
	};

	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item  error>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={values.username || ''} onChangeText={handleOnChangeUsername} />
				</Item>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input
						secureTextEntry={true}
						value={values.password || ''}
						onChangeText={handleOnChangePassword}
					/>
				</Item>
			</View>
			<View style={{ padding: 40 }}>
				<Button block first onClick={handleSubmit}>
					<Text>Login</Text>
				</Button>
			</View>

			<View>
				<Text>{message}</Text>
			</View>
		</Form>
	);
};

export default LoginForm;
