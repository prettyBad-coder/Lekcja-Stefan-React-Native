import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen1 extends Component {
  render() {
	return (
		<Button title="go to screen2" onPress={() => this.props.navigation.navigate("s2", {a: 1, b: 2})} />
	);
  }
}

export default Screen1;
