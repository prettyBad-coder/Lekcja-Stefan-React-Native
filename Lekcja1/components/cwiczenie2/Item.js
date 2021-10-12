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
	  <View style={ this.props.compStyles }>
		<Text style={ this.props.textStyles }> { this.props.text } </Text>
	  </View>
	);
  }
}

export default Item;
