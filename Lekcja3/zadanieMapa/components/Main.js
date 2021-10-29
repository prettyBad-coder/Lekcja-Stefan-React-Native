import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from "expo-font";
import MyButton from './MyButton';


class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontLoaded: false,
		}
	}


	componentDidMount = async () => {
		await Font.loadAsync({
			'myFont': require('../../font/codefont.ttf'),
		});
		this.setState({ fontLoaded: true })
	}

	buttonPress = async () => {
		this.props.navigation.navigate('mapList');
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.topContainer }>
					{
						this.state.fontLoaded
						?
						<View style={ styles.titleWrapper }>
							<Text style={ styles.title }>
								GeoMap App
							</Text>
						</View>
						:
						null
					}
				</View>
				<View style={ styles.bottomContainer }>
					<MyButton name="START" onClick={ this.buttonPress } textStyle={{ fontSize: 40 }} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	topContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 30,
		paddingRight: 30,
	},
	bottomContainer: {
		flex: 1,
		paddingLeft: 60,
	},
	title: {
		fontFamily: 'myFont',
		fontSize: 60,
		backgroundColor: '#ff006e',
		padding: 10,
		color: 'white'
	},
	titleWrapper: {
		backgroundColor: '#8338ec',
		padding: 10,
		borderWidth: 10,
		borderColor: '#3a86ff',
	}
})

export default Main;
