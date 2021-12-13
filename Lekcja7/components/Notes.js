import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from "expo-secure-store";
import SingleNote from './SingleNote';


class Notes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keysArr: [],
			itemsArr: [],
		};
	}

	componentDidMount = async () => {
		let keysArr = JSON.parse(await SecureStore.getItemAsync('keysArr'));
		let itemsArr = [];
		for(const key of keysArr) 
			itemsArr.push(await SecureStore.getItemAsync(key.toString()));

		this.setState({
			keysArr: [...keysArr],
			itemsArr: [...itemsArr],
		});
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<TouchableOpacity style={styles.buttonStyle} onPress={this.click}>
					<Text style={styles.buttonText}>
						Get notes
					</Text>
				</TouchableOpacity>
				<View style={styles.notesWrapper}>
					{
						this.state.itemsArr.map((element, index) => {
							return (
								<SingleNote properties={element} key={index} />
							)
						})
					}
				</View>
			</View>
	);
}
}

const styles = StyleSheet.create({
	buttonStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
	buttonText: {
		color: 'white'
	},
})

export default Notes;
