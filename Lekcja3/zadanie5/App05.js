import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";
import * as Location from "expo-location";
import { AsyncStorage } from "react-native";
import MapView from 'react-native-maps';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 50.111,
					longitude: 20.111,
					latitudeDelta: 0.001,
					longitudeDelta: 0.001,
				}}
			>
				<MapView.Marker
					coordinate={{ 
						latitude: 50.111,
						longitude: 20.111,
					}}
					title={ 'pos' }
					description={ 'opis' }
				/>
			</MapView>
		);
	}
}

export default App;
