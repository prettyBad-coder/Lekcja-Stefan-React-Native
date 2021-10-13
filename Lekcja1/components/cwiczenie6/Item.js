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
		<View style={{ flex: 1, backgroundColor: this.props.color, fontSize: 15, justifyContent: 'center', alignItems: 'center'}}>
			<Text> { this.props.index + 1 } </Text>
		</View>
	);
  }
}

export default Item
;
