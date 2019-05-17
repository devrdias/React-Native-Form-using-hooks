/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
	Body,
	Button,
	Container,
	Content,
	Form,
	Header,
	Input,
	Item,
	Label,
	Left,
	Right,
	Subtitle,
	Text,
	Title,
	View
} from 'native-base';
import React, { useState } from 'react';
import { setupMaster } from 'cluster';

const App = () => {
	const [name, setName] = useState('Login');
	return (
		<Container>
			<Header noShadow hasSubtitle>
				<Left style={{ flex: 1 }} />
				<Body style={{ flex: 3, justifyContent: 'center' }}>
					<Title span style={{ alignSelf: 'center' }}>
						React Native Forms
					</Title>
					<Subtitle style={{ alignSelf: 'center' }}>with Hooks</Subtitle>
				</Body>
				<Right style={{ flex: 1 }} />
			</Header>
			<Content>
				<LoginForm />
			</Content>
		</Container>
	);
};

export default App;
