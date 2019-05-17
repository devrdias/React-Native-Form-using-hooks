/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Body, Container, Content, Form, Header, Input, Item, Title } from 'native-base';
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header noShadow>
					<Body>
						<Title span>React Native Form using Hooks </Title>
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
