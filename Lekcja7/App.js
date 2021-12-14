import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import AddCategory from './components/AddCategory'; 
import EditView from './components/EditView';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />	
      <DrawerItem label="info" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
		<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				options={{
					drawerIcon: () => (
						<Image
							style={styles.icon}
							source={require('./assets/notes.png')}
						/>
					)
				}} 
				name="Notes" 
				component={Notes}
			/>
			<Drawer.Screen 
				options={{
					drawerIcon: () => (
						<Image
							style={styles.icon}
							source={require('./assets/plus.png')}
						/>
					)
				}} 
				name="AddNote" 
				component={AddNote} 
			/>
			<Drawer.Screen 
				options={{
					drawerIcon: () => (
						<Image
							style={styles.icon}
							source={require('./assets/plus-category.png')}
						/>
					)
				}} 
				name="AddCategory" 
				component={AddCategory} 
			/>
			<Drawer.Screen 
				// options={{
				// 	drawerIcon: () => (
				// 		<Image
				// 			style={styles.icon}
				// 			source={require('./assets/plus-category.png')}
				// 		/>
				// 	)
				// }}
				name="EditView" 
				component={EditView} 
			/>
		</Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
	icon: {
		height: 30,
		width: 30,
	},
})
