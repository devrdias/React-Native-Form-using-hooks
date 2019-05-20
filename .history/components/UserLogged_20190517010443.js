import { React } from 'react';
import { View, Text } from 'native-base';

const UserLogged = message => {
	return (
		<View>
			<Text>{message}</Text>
		</View>
	);
};

export default UserLogged;
