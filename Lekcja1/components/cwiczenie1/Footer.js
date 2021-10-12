import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Footer extends Component {
  constructor(props) {
	super(props);
	this.state = {
	};
  }

  render() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}> Footer </Text>
		</View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
	},
	text: {
		fontSize: 48,
	}
})


export default Footer;
