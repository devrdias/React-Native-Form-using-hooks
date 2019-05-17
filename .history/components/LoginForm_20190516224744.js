import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import React, { useState } from 'react';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(null);
	return (
		<Form>
			<View
				style={{
					// justifyContent: 'center',
					// alignContent: 'center',
					padding: 40
				}}
			>
				<Item floatingLabel>
					<Label style={{ paddingTop: 2 }}>Username</Label>
					<Input />
				</Item>
				<Item floatingLabel last>
					<Label style={{ paddingTop: 2 }}>Password</Label>
					<Input />
				</Item>
			</View>
			<View style={{ padding: 40 }}>
				<Button block first onClick={() => setUsername('teste')}>
					<Text>Login</Text>
				</Button>
			</View>
		</Form>
	);
};

export default LoginForm;
