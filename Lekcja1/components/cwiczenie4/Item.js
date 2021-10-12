import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Item extends Component {
  constructor(props) {
	super(props);
	this.state = {
	
	};
  }

  render() {
	return (
		<View style={{ flex: 1, backgroundColor: this.props.color }}>
			<Text>Item { this.props.index }</Text>
		</View>
	);
  }
}

export default Item
;
