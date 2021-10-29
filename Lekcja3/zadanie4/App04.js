import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";
import * as Location from "expo-location";
import { AsyncStorage } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	setData = async () => {
		await AsyncStorage.setItem('key1', 'value1');
		await AsyncStorage.setItem('key' + Math.round(Math.random() * 100), 'value' + Math.random());
	}
	
	getData = async () => {
		let value = await AsyncStorage.getItem('key1');
		console.log(value);
	}

	getAllData = async () => {
		let keys = await AsyncStorage.getAllKeys();
		console.log('keys', keys);

		let stores = await AsyncStorage.multiGet(keys);
		console.log('stores', stores);

		let maps = stores.forEach((element, index) => {
			let key = element[0];
			let value = element[1];
			console.log(key, value)
		})
	}

	componentDidMount = async () => { 
		await Font.loadAsync({
			'myFont': require('../font/amatic.ttf'),
		});
		this.setState({ fontLoaded: true })
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
				{
					this.state.fontLoaded
					?
					<>
						<TouchableOpacity onPress={ this.setData }>
							<Text style={{ fontFamily: 'myFont', fontSize: 50 }}>
								setData
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={ this.getData }>
							<Text style={{ fontFamily: 'myFont', fontSize: 50 }}>
								getData
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={ this.getAllData }>
							<Text style={{ fontFamily: 'myFont', fontSize: 50 }}>
								getAllData
							</Text>
						</TouchableOpacity>
					</>
					:
					null
				}
			</View>
		);
	}
}

export default App;
