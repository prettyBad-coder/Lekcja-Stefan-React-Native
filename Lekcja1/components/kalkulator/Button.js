import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	_onPress = () => {
		this.props.buttonClick(this.props.name);
	}

	_onLongPress = () => {
		this.props.buttonPress();
	}

	render() {
		return (
			<TouchableOpacity onLongPress={ this._onLongPress } onPress={ this._onPress } style={ styles.box }>
				<Text style={ styles.text }>
					{ this.props.name }
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#505050',
		borderWidth: 1,
	},
	text: {
		color: 'white',
		fontSize: 15,
	}
})

export default Button;
