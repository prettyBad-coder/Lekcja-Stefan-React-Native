import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//componets
import Main from './components/zadanie/Main';
import Users from './components/zadanie/Users';
import Details from './components/zadanie/Details';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='main'
					component={Main}
					options={{
						title: 'Main',
						headerStyle: {
							backgroundColor: '#303030'
						},
						headerTitleStyle: {
							color: '#2a9d8f'
						}
					}}
				/>
				<Stack.Screen 
					name="users"
					component={Users}
					options={{
						title: 'Users',
						headerStyle: {
							backgroundColor: '#303030',
						},
						headerTintColor: '#2a9d8f',
						headerTitleStyle: {
							fontWeight: 'bold',
							color: '#f4a261'
						},
					}}
				/>
				<Stack.Screen 
					name="details"
					component={Details}
					options={{
						title: 'Details',
						headerStyle: {
							backgroundColor: '#303030',
						},
						headerTintColor: '#2a9d8f',
						headerTitleStyle: {
							fontWeight: 'bold',
							color: '#f4a261'
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
