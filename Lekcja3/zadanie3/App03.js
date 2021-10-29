import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";
import * as Location from "expo-location";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	setPermissions = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if(status !== 'granted')
			alert('Odmawiam przydzielenia uprawnień do czytania lokalizacji');
	}

	getPosition = async () => {
		let position = await Location.getCurrentPositionAsync();
		alert(JSON.stringify(position, null, 4));
		console.log('siema eniu')
	}

	componentDidMount = async () => { 
		await Font.loadAsync({
			'myFont': require('../font/amatic.ttf'),
		});
		this.setState({ fontLoaded: true })
		this.setPermissions();
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{
					this.state.fontLoaded
					?
					<TouchableOpacity onPress={ this.getPosition }>
						<Text style={{ fontFamily: 'myFont', fontSize: 100 }}>
							getPosition
						</Text>
					</TouchableOpacity>
					:
					null
				}
			</View>
		);
	}
}

export default App;
