/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
	Body,
	Container,
	Content,
	Form,
	Header,
	Input,
	Item,
	Title,
	Subtitle,
	Right,
	Left,
	Button,
	Text,
	View,
	Label
} from 'native-base';
import React, { Component } from 'react';

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
				<Form>
					<View style={{ padding: 40 }}>
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
						<Button block first>
							<Text>Login</Text>
						</Button>
					</View>
				</Form>
			</Content>
		</Container>
	);
};
