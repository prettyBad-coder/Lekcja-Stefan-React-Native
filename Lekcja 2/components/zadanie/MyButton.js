import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MyButton extends Component {

	onClick = () => {
		this.props.onClick();
	}

	render() {

		
		return (
			<TouchableOpacity style={ styles.container }>
				<Text style={ styles.text } onPress={this.onClick}>
					{this.props.name}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderWidth: 2,
		borderRadius: 10,
		marginRight: 5,
	},
	text: {
		fontSize: 15,
		fontWeight: 'bold',
	}
});