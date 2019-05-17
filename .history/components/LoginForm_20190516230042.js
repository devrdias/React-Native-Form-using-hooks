import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React, { useState } from 'react';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);

	handleOnClick = () => {};

	return (
		<Form>
			<View style={{ padding: 40 }}>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input value={username} onChangeText={username => setUsername(username)} />
				</Item>
				<Item floatingLabel last>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input value={password} onChangeText={password => setPassword(password)} />
				</Item>
			</View>
			<View style={{ padding: 40 }}>
				<Button block first onClick={this.handleOnClick}>
					<Text>Login</Text>
				</Button>
			</View>
		</Form>
	);
};

export default LoginForm;
