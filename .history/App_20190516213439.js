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
	View
} from 'native-base';
import React, { Component } from 'react';

export default class App extends Component {
	render() {
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
						<View style={{ justifyContent: 'center', alignContent: 'center' }}>
							<Item>
								<Input placeholder="Username" />
							</Item>
							<Item last>
								<Input placeholder="Password" />
							</Item>
						</View>
						<Button first style={{ padding: 40 }}>
							<Text>Login</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
