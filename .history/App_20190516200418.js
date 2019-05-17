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
	Left
} from 'native-base';
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header noShadow hasSubtitle>
					<Left style={{ flex: 1 }} />
					<Body style={{ flex: 1 }}>
						<Title span style={{ justifyContent: 'center' }}>
							React Native Form
						</Title>
						<Subtitle style={{ justifyContent: 'center' }}>with Hooks</Subtitle>
					</Body>
				</Header>
				<Content>
					<Form>
						<Item>
							<Input placeholder="Username" />
						</Item>
						<Item last>
							<Input placeholder="Password" />
						</Item>
					</Form>
				</Content>
			</Container>
		);
	}
}
