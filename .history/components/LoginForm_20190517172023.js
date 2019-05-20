import { Button, Form, Input, Item, Label, Text, View, Icon } from 'native-base';
import React from 'react';
import useLoginForm from '../hooks/useLoginForm';
import validate from './LoginFormValidationRules';
import CustomTextInput from './CustomTextInput';

const LoginForm = () => {
	const { values, message, errors, handleSubmit, handleOnChangeValue } = useLoginForm(
		login,
		validate
	);

	const login = () => {
		console.info('You have just logged in ! React Hooks Rocks !!!');
	};

	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item floatingLabel error={errors.email ? true : false}>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={values.username || ''} onChangeText={handleOnChangeValue('username')} />

					{errors.email && <Icon name="close-circle" />}
					{errors.email && <Text style={{ color: 'red', fontSize: 5 }}>{errors.email}</Text>}
				</Item>
				<Item floatingLabel error={errors.password ? true : false}>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input
						secureTextEntry={true}
						value={values.password || ''}
						onChangeText={handleOnChangeValue('password')}
					/>
					{errors.password && <Icon name="close-circle" />}
					{errors.password && <Text style={{ color: 'red', fontSize: 5 }}>{errors.password}</Text>}
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
