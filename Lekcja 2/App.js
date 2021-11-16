import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//componets
import Screen1 from './components/cwiczenie/Screen1';
import Screen2 from './components/cwiczenie/Screen2';


const Stack = createNativeStackNavigator();

function App() {
	return (
		  <NavigationContainer>
			  <Stack.Navigator>
					<Stack.Screen 
						name="s1"
						component={Screen1}
						options={{
							title: 'HomePage',
							headerStyle: {
								backgroundColor: '#404040',
							},
							headerTitleStyle: {
								fontWeight: 'bold',
								fontSize: 25,
								color: '#2a9d8f'
							},	
						}}
					/>
					<Stack.Screen 
						name="s2"
						component={Screen2}  
						options={{
							title: 'title',
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
