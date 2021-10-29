import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class MapItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		
		const styles = StyleSheet.create({
			container: {
				backgroundColor: this.props.color,
				padding: 20,
				paddingLeft: 3,
				marginLeft: 20,
				marginRight: 20,
				marginTop: 10,
				flexDirection: 'row',
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
		})

		return (
			<View style={ styles.container }>
				<Image 
					style={ styles.image }
					source={ require('../images/map.png') }
				/>
				<View style={ styles.textWrapper }>
					<Text style={ styles.text }> lat: {this.props.lat} </Text>
					<Text style={ styles.text }> lng: { this.props.lng } </Text>
				</View>
			</View>
		);
	}
}

export default MapItem;
