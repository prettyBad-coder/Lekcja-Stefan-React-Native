import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Item extends Component {
  constructor(props) {
	super(props);
	this.state = {
	
	};
  }

  render() {
	console.log(this.props.fontColor);
	return (
		<View style={{ flex: 1, backgroundColor: this.props.color, fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
			<Text style={{ color: this.props.fontColor, fontSize: 25}}>Item { this.props.index }</Text>
		</View>
	);
  }
}

export default Item
;
