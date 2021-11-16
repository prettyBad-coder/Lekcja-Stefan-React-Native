import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MyButton extends Component {

	onClick = () => {
		this.props.onClick();
	}

	render() {
		const styles = StyleSheet.create({
			container: this.props.containerStyle,
			text: this.props.textStyle
		});

		return (
			<TouchableOpacity style={ styles.container }>
				<Text style={ styles.text } onPress={this.onClick}>
					{this.props.name}
				</Text>
			</TouchableOpacity>
		);
	}
}