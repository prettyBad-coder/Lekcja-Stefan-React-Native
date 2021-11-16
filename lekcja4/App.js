import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//components
import EntryPage from './components/EntryPage';
import PhotosPage from './components/PhotosPage';
import cameraComponent from './components/CameraComponent'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen
						name='entryPage'
						component={ EntryPage }
						options={{ headerShown: false }}
					/> */}
					<Stack.Screen
						name='photosList'
						component={ PhotosPage }
						options={{ headerShown: false }}
						options={{
							title: 'photosList',
							headerStyle: {
								backgroundColor: 'white',
							},
							headerBackVisible: false,
							headerTitleStyle: {
								color: 'black'
							}
						}}
					/>
					<Stack.Screen
						name='cameraComponent'
						component={ cameraComponent }
						options={{
							title: 'Camera',
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;
