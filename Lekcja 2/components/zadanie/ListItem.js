import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MyButton from './MyButton';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [
				'#264653',
				'#2a9d8f',
				'#e9c46a',
				'#f4a261',
				'#e76f51',
			]
		};
	}

	deleteUser = () => {
		this.props.deleteUser(this.props.properties.id)
	}

	goToDetails = () => {
		this.props.navigation.navigate('details', {
			name: this.props.properties.name,
			password: this.props.properties.password,
			color: this.state.colors[this.props.properties.colorNumber],
			date: this.props.properties.date,
		});
	}

	render() {

		const styles = StyleSheet.create({
			container: {
				backgroundColor: this.state.colors[this.props.properties.colorNumber],
				padding: 25,
				paddingRight: 0,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between'
			},
			userInfo: {
				maxWidth: '60%',
			},
			buttonsWrapper: {
				flexDirection: 'row',
			},
			text: {
				fontSize: 30,
			}
		})

		return (
			<View style={ styles.container }>
				<View style={ styles.userInfo }>
					<Text style={styles.text}> {this.props.properties.name} </Text>
					<Text style={styles.text}> {this.props.properties.password} </Text>
				</View>
				<View style={ styles.buttonsWrapper }>
					<MyButton name="Details" onClick={ this.goToDetails } />
					<MyButton name="Delete" onClick={ this.deleteUser } />
				</View>
			</View>
		);
	}
}

export default ListItem;
