import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
			<TouchableOpacity onPress={this.onClick} style={ styles.container }>
				<Image 
					style={{ 
						height: 50,
						width: 50,
					}}
					source={this.props.name}
				/>
			</TouchableOpacity>
		);
	}
}