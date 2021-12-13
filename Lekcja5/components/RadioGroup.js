import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

class RadioGroup extends Component {
  constructor(props) {
	super(props);
	this.state = {
		selectedIndex: null,
	};
  }

  onClick = (i) => {
	  this.props.onChange(this.props.data[i]);
	  this.setState({selectedIndex: i})
  }

  render() {
	return (
	  <View style={styles.wrapper}>
		<Text style={styles.title}> {this.props.title.toUpperCase()} </Text>
		<View>
			{
				this.props.data.map((element, index) => {
					return (
						<RadioButton onClick={this.onClick} name={element} key={index} index={index} selected={index === this.state.selectedIndex ? true : false} />
					)
				})
			}
		</View>
	  </View>
	);
  }
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 30,
	},
	title: {
		color: 'white',
		fontSize: 20,
	}
})

export default RadioGroup;
