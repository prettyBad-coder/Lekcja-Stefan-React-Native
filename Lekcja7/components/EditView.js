import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";

class EditView extends Component {
  constructor(props) {
	super(props);
	this.state = {
		title: '',
		content: '',
		category: '',
		key: '',
		keysArr: [],
	};
		this.funkcja = null;
	}

	componentDidMount = () => {
		this.funkcja = this.props.navigation.addListener("focus", () => {
			this.setValues();
		});
		this.setValues();
	};
	
	componentWillUnmount() {
		this.funkcja();
	}

	setValues = async () => {
		let keysArr = JSON.parse(await SecureStore.getItemAsync('keysArr'));
		let key = keysArr[this.props.route.params.index];
		this.setState({
			title: JSON.parse(this.props.route.params.properties).title,
			content: JSON.parse(this.props.route.params.properties).content,
			category: JSON.parse(this.props.route.params.properties).category,
			key: key,
			keysArr: [...keysArr],
		})
	}

	_handleSubmit = async (index) => {
		console.log(await SecureStore.getItemAsync(this.state.key.toString()));
		await SecureStore.setItemAsync(this.state.key.toString(), JSON.stringify({
			title: this.state.title,
			content: this.state.content,
			time: this.state.key,
			category: this.state.category,
		}))
		this.props.navigation.navigate('Notes')
	}


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
			<TextInput
				onChangeText={(category) => this.setState({ category })}
				style={styles.input}
				placeholder="Category"
				value={this.state.category}
			/>
			<TouchableOpacity style={styles.buttonStyle} onPress={() => this._handleSubmit(this.props.route.params.index)}>
				<Text style={styles.buttonText}>
					Set
				</Text>
			</TouchableOpacity>
	</View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
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

export default EditView;
