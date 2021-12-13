import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SingleNote extends Component {
  constructor(props) {
	super(props);
	this.state = {
		item: {},
	};
  }


	render() {
		return (
			<View style={styles.box}>
				<Text>
					time: {JSON.parse(this.props.properties).time}
				</Text>
				<Text>
					title: {JSON.parse(this.props.properties).title}
				</Text>
				<Text>
					content: {JSON.parse(this.props.properties).content}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: { 
		height: 150, 
		width: 150,
		backgroundColor: 'blue',
	},
})

export default SingleNote;
