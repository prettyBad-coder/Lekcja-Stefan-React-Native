import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';

class MapItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switch: this.props.state,
		};
	}

	switchChange = () => this.setState({switch: !this.state.switch});
	
	componentDidUpdate = () => this.props.switchChange({id: this.props.id, state: this.state.switch});

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
				backgroundColor: this.props.color,
				padding: 21,
				right: 0,
			},
			switch: {
				left: 2,
				bottom: 2,
			}
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
				<View style={ styles.switchWrapper }>
					<Switch 
						style={ styles.switch }
						trackColor={{ true: '#06d6a0' }}
						ios_backgroundColor='#d62828'
						onValueChange={ this.switchChange }
						value={ this.state.switch }
					/>
				</View>
			</View>
		);
	}
}

export default MapItem;
