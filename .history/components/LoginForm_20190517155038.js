import { Button, Form, Input, Item, Label, Text, View, Icon } from 'native-base';
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
				<Item floatingLabel error={errors.email ? true : false}>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={values.username || ''} onChangeText={handleOnChangeUsername} />
					{errors.email && <Icon name="close-circle" />}
				</Item>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input
						secureTextEntry={true}
						value={values.password || ''}
						onChangeText={handleOnChangePassword}
					/>
					{errors.password && <Icon name="close-circle" />}
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
