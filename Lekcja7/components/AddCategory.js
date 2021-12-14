import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";

class AddCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'cat1',
			categoriesArr: [],
		};
	}

	_handleSubmit = async (category) => {
		let categoriesArr = this.state.categoriesArr
		categoriesArr.push(category);
		await SecureStore.setItemAsync('categoriesArr', JSON.stringify(categoriesArr));
		this.setState({categoriesArr: [...categoriesArr]})
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					onChangeText={(category) => this.setState({ category })}
					style={styles.input}
					placeholder="Category"
					value={this.state.category}
				/>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => this._handleSubmit(this.state.category)}>
					<Text style={styles.buttonText}>
						Add
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
export default AddCategory;
