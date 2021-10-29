import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	componentDidMount = async () => { 
		await Font.loadAsync({
			'myFont': require('../font/amatic.ttf'),
		});
		this.setState({ fontLoaded: true })
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{
					this.state.fontLoaded
					?
					<Text style={{ fontFamily: 'myFont', fontSize: 100 }}>
						Dupa
					</Text>
					:
					null
				}
			</View>
		);
	}
}

export default App;
