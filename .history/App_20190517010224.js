/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Body, Container, Content, Header, Left, Right, Subtitle, Title } from 'native-base';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import useUserLogged from './hooks/useUserLogged';
import UserLogged from './components/UserLogged';

const App = () => {
	const { message, handleLogin } = useUserLogged;

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
				<UserLogged message />
			</Content>
		</Container>
	);
};

export default App;
