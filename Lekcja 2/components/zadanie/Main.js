import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import settings from '../../settings.json';
import MyButton from './MyButton'; 

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputNameData: '',
			inputPasswordData: '',
			users: [],
		};
	}

	addUser = () => {
		if(this.state.inputNameData != '' && this.state.inputPasswordData != '') {
			axios.post(`http://${settings.settings.IP}:${settings.settings.PORT}/addUser`, {
				name: this.state.inputNameData,
				password: this.state.inputPasswordData
			})
			.then(response => {
				if(response.data.status) 
					this.props.navigation.navigate('users');
				else 
					alert(response.data.alert);
			})
			.catch(error => console.log(error));
		} else if(this.state.inputNameData == '' && this.state.inputPasswordData == '') {
			alert('Oba pole niewypełnione');
		} else if(this.state.inputNameData != '' && this.state.inputPasswordData == '') {
			alert('Pole na hasło nie zostało wypełnione');
		} else if(this.state.inputNameData == '' && this.state.inputPasswordData != '') {
			alert('Pole na Login nie zostało wypełnione');
		}
	}

	inputName = (e) => { this.setState({inputNameData: e}) }

	inputPassword = (e) => { this.setState({inputPasswordData: e}) }

	render() {
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView>
					<Text style={ styles.title }>
						Login
					</Text>
					<TextInput onChangeText={ this.inputName }  placeholder="Username" style={styles.input}/>
					<Text style={ styles.title }>
						Password
					</Text>
					<TextInput onChangeText={ this.inputPassword } secureTextEntry={ true } placeholder="Password" style={styles.input}/>
				</KeyboardAvoidingView>
				<MyButton name={ 'Add user' } onClick={ this.addUser } />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#303030',
		alignItems: 'center',
	},
	input: {
		borderWidth: 2,
		borderRadius: 10,
		margin: 5,
		width: 250,
		height: 40,
		padding: 5,
	},
	title: {
		fontSize: 30,
		color: '#2a9d8f',
		textAlign: 'center',
	}
})

export default Main;
