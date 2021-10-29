import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{
					this.state.number == 0 ?
					<ActivityIndicator size='large' color='green' />
					:
					<ActivityIndicator size='small' color='red' />
				}
			</View>
		);
	}
}

export default App;
