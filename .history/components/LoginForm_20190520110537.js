import { Button, Form, Icon, Input, Item, Label, Text, View } from 'native-base';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import useLoginForm from '../hooks/useLoginForm';
import validate from './LoginFormValidationRules';

const LoginForm = () => {
	const message = 'You have just logged in ! React Hooks Rocks !!!';
	const message2 =
		'React Hooks let you use state and lifee-cycle methods without writing a Class component!';

	login = () => {
		setIsLoggedIn(true);
	};

	const {
		values,
		errors,
		isLoggedIn,
		isSubmitting,
		handleOnChangeValue,
		handleSubmit,
		setIsLoggedIn
	} = useLoginForm(login, validate);

	const renderLoading = () => {
		return <ActivityIndicator size="small" color="#482fff" />;
	};

	const renderLoginForm = () => {
		return (
			<View>
				<View style={{ padding: 40 }}>
					<Item floatingLabel error={errors.email ? true : false}>
						<Label style={{ paddingTop: 2 }}>Username</Label>
						<Input value={values.username || ''} onChangeText={handleOnChangeValue('username')} />

						{errors.email && <Icon type="AntDesign" name="close" />}
					</Item>
					<View>
						{errors.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>}
					</View>
					<Item floatingLabel error={errors.password ? true : false}>
						<Label style={{ paddingTop: 2 }}>Password</Label>
						<Input
							secureTextEntry={true}
							value={values.password || ''}
							onChangeText={handleOnChangeValue('password')}
						/>
						{errors.password && <Icon type="AntDesign" name="close" />}
					</Item>
					<View>
						{errors.password && (
							<Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text>
						)}
					</View>
				</View>
				<View style={{ padding: 40 }}>
					<Button block first onPress={handleSubmit}>
						<Text>Login</Text>
					</Button>
				</View>
			</View>
		);
	};

	return (
		<Form>
			{console.log('isSubmitting', isSubmitting)}
			{isSubmitting && renderLoading()}

			{isLoggedIn ? (
				<View style={{ justifyContent: 'center', flex: 1 }}>
					<Text style={{ textAlign: 'center' }}>{message}</Text>
					<Text style={{ textAlign: 'center' }}>{message2}</Text>
				</View>
			) : (
				renderLoginForm()
			)}
		</Form>
	);
};

export default LoginForm;
