import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Item extends Component {
	constructor(props) {
	super(props);
	this.state = {

	};
	}

	onPress = () => {
		alert(`id: ${ this.props.index }`);
	}

  render() {
	return (
		<TouchableOpacity onPress={ this.onPress } style={{ flex: 1, backgroundColor: this.props.color, fontSize: 15, justifyContent: 'center', alignItems: 'center'}}>
			<Text> { this.props.index + 1 } </Text>
		</TouchableOpacity>
	);
  }
}

export default Item
;
