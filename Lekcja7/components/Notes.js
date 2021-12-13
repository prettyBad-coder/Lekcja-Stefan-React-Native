import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from "expo-secure-store";
import SingleNote from './SingleNote';
import { ScrollView } from 'react-native-gesture-handler';


class Notes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keysArr: [],
			itemsArr: [],
		};
		this.funkcja = null;
	}

	getNotes = async () => {
		let keysArr = JSON.parse(await SecureStore.getItemAsync('keysArr'));
		let itemsArr = [];
		for(const key of keysArr) 
			itemsArr.push(await SecureStore.getItemAsync(key.toString()));

		this.setState({
			keysArr: [...keysArr],
			itemsArr: [...itemsArr],
		});
	}

	refresh = () => {
		console.log('refresh');
	}

	componentDidMount = () => {
		this.funkcja = this.props.navigation.addListener('focus', () => {
			this.getNotes()
		});
		this.getNotes()
	}

	componentWillUnmount() {
		this.funkcja();
	}

	render() {
		return (
			<ScrollView style={styles.notesWrapper}>
				{
					this.state.itemsArr.map((element, index) => {
						return (
							<SingleNote properties={element} key={index} />
						)
					})
				}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	notesWrapper: {
		flex: 1,
	},
})

export default Notes;
