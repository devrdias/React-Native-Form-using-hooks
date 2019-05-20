/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Body, Container, Content, Header, Left, Right, Subtitle, Title } from 'native-base';
import React from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
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
