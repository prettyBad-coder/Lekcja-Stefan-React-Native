import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { TextInput } from "react-native-gesture-handler";
import MyButton from "./MyButton";
import { Picker } from '@react-native-picker/picker';

class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			index: 0,
			keysTab: [],
			categoriesArr: [],
			currentCategory: '',
		};

		this.funkcja = null;
	}

	_handleSubmit = async (title, content) => {
		let keysTab = this.state.keysTab;
		
		let date = Date.now();
		keysTab.push(date);

		await SecureStore.setItemAsync(date.toString(), JSON.stringify({
			title: title,
			content: content,
			time: date,
			category: this.state.currentCategory
		}));
		await SecureStore.setItemAsync('keysArr', JSON.stringify([...keysTab]));
		this.setState({
			keyTabs: [...keysTab],
			title: '',
			content: '',
		})
		
	};

	getCategories = async () => {
		this.setState({
			categoriesArr: JSON.parse(await SecureStore.getItemAsync('categoriesArr')),
			currentCategory: JSON.parse(await SecureStore.getItemAsync('categoriesArr'))[0],
		})
	}

	componentDidMount = () => {
		this.funkcja = this.props.navigation.addListener("focus", () => {
			this.getCategories();
		});
		this.getCategories();
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					onChangeText={(title) => this.setState({ title })}
					style={styles.input}
					placeholder="Title"
					value={this.state.title}
				/>
				<TextInput
					onChangeText={(content) => this.setState({ content })}
					style={styles.input}
					placeholder="Content"
					value={this.state.content}
				/>
				<Picker

					selectedValue={this.state.currentCategory}
					onValueChange={(value) => this.setState({currentCategory: value})}>

					{
						this.state.categoriesArr.map((element, index) => {
							return (
								<Picker.Item value={element} label={element} key={index}/>
							)
						})
					}

				</Picker>
				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity style={styles.buttonStyle} onPress={() => this._handleSubmit(this.state.title, this.state.content)}>
						<Text style={styles.buttonText}>
							Add
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 40,
		borderBottomWidth: 1,
		margin: 10,
		width: "95%",
		textAlign: "center",
	},
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
});

export default AddNote;
