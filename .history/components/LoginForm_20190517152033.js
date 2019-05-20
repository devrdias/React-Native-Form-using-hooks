import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React from 'react';
import useLoginForm from '../hooks/useLoginForm';

const LoginForm = () => {
	login = () => {
		handleOnlogin('You have just logged in ! React Hooks Rocks !!!');
	};

	const {
		values,
		message,
		errors,
		isLoading,
		handleOnclick,
		handleOnChangeUsername,
		handleOnChangePassword,
		handleOnlogin
	} = useLoginForm(login);

	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input required value={values.username || ''} onChangeText={handleOnChangeUsername} />
				</Item>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input
						required
						secureTextEntry={true}
						value={values.password || ''}
						onChangeText={handleOnChangePassword}
					/>
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
