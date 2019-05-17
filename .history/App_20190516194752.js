/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Body, Container, Content, Form, Header, Input, Item, Title, Subtitle } from 'native-base';
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header noShadow hasSubtitle>
					<Body style={justifyContent: 'center'Ï}>
						<Title span>React Native Form </Title>
						<Subtitle>with Hooks</Subtitle>
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
