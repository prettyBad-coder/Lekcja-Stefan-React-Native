import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components 
import Main from './components/Main';
import MapList from './components/MapList';
import MapComponent from './components/MapComponent';

const Stack = createNativeStackNavigator();

class App extends React.Component {
	

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='main'
						component={ Main }
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='mapList'
						component={ MapList }
						options={{
							title: 'SavedPositions',
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
						name='map-component'
						component={ MapComponent }
						options={{
							title: 'Map',
							headerStyle: {
								backgroundColor: 'white',
							},
							headerBackTitleVisible: false,
							headerTitleStyle: {
								color: 'black'
							}
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;
