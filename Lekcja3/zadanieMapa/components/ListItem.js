import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';

class MapItem extends Component {

	switchChange = () => {
		this.props.switchChange(this.props.id);
	};
	
	render() {
		
		
		return (
			<View style={[styles.container, {backgroundColor: this.props.color}]}>
				<Image 
					style={ styles.image }
					source={ require('../images/map.png') }
				/>
				<View style={ styles.textWrapper }>
					<Text style={ styles.text }> lat: {this.props.lat} </Text>
					<Text style={ styles.text }> lng: { this.props.lng } </Text>
				</View>
				<View style={[styles.switchWrapper, {backgroundColor: this.props.color}]}>
					<Switch 
						style={ styles.switch }
						trackColor={{ true: '#06d6a0' }}
						ios_backgroundColor='#d62828'
						onValueChange={ this.switchChange }
						value={ this.props.state }
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingLeft: 3,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
		overflow: 'hidden'
	},
	text: {
		fontSize: 17,
		color: 'white',
		fontFamily: 'myFont'
	},
	image: {
		height: 85,
		width: 85,
	},
	textWrapper: {
		justifyContent: 'space-evenly'
	},
	switchWrapper: {
		position: 'absolute',
		padding: 21,
		right: 0,
	},
	switch: {
		left: 2,
		bottom: 2,
	}
});

export default MapItem;
