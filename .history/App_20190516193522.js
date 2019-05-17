/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title } from 'native-base';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header noShadow>
					<Body>
						<Title>Header No Shadow</Title>
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
