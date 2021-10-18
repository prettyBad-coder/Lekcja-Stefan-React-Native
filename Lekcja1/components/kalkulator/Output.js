import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Output extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.output}>
				<Text style={styles.text}> {this.props.string} </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	output: {
		paddingTop: '10%',
		flex: 1,
		backgroundColor: '#264653',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	text: {
		color: 'white',
		fontSize: 72,
	}
})

export default Output;
