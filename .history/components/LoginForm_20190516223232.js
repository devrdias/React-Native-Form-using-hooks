import React from 'react';

const LoginForm = () => {
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
