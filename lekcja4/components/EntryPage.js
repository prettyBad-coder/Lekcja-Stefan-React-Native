import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton';

class EntryPage extends Component {

	myButtonClick = () => {
		this.props.navigation.navigate('photosList')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}> Camera App </Text>
				<Text style={styles.paragraph}> Show gallery pictures </Text>
				<Text style={styles.paragraph}> take pictures from camera </Text>
				<Text style={styles.paragraph}> save photo to device </Text>
				<Text style={styles.paragraph}> delete photo from device </Text>
				<Text style={styles.paragraph}> share photo </Text>
				<MyButton name={'begin'} onClick={this.myButtonClick} containerStyle={styles.buttonContainerStyles} textStyle={styles.buttonTextStyles} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f72585',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: '700',
		fontSize: 50,
		color: 'white',
		marginBottom: 50,
	},
	paragraph: {
		fontSize: 25,
		fontWeight: '300',
		color: 'white',
		marginBottom: 10,
	},
	buttonContainerStyles: {
		backgroundColor: '#4361ee',
		borderWidth: 10,
		padding: 10,
		borderColor: '#4cc9f0',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		marginTop: 45,
	},
	buttonTextStyles: {
		color: 'white',
		fontSize: 35,
		fontWeight: '700',
		borderWidth: 10,
		borderColor: '#3f37c9',
		padding: 10,
		backgroundColor: '#560bad',
	}
})

export default EntryPage;
