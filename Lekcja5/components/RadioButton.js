import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class RadioButton extends Component {
  constructor(props) {
	super(props);
	this.state = {
		color: '#f72585'
	};
  }

  render() {
	return (
		<View style={styles.radio}>
			<TouchableOpacity onPress={() => this.props.onClick(this.props.index)} style={[styles.circleBig, {
				borderColor: this.state.color,
			}]}>
				<View style={[styles.circleSmall, {
					backgroundColor: this.props.selected ? this.state.color : 'transparent'
				}]}>
				</View>
			</TouchableOpacity>
			<Text style={styles.name}>
				{this.props.name}
			</Text>
		</View>
	);
  }
}

const styles = StyleSheet.create({
	radio: { 
		marginTop: 10, 
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	circleBig: {
		display: 'flex',
		height: 30,
		width: 30,
		borderWidth: 1,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},	
	circleSmall: {
		height: 20,
		width: 20,
		borderRadius: 50,
	},
	name: {
		marginLeft: 10,
		color: 'white',
	}
})

export default RadioButton;
