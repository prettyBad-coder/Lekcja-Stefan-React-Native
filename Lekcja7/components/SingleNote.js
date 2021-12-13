import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

class SingleNote extends Component {
  constructor(props) {
	super(props);
	this.state = {
		item: {},
		date: '',
		color: '',
	};
  }

	getRandomColor = () => {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) 
			color += letters[Math.floor(Math.random() * 16)];
		this.setState({color: color})
	}

  	componentDidMount = () => {
		this.setState({date: (new Date(JSON.parse(this.props.properties).time).toDateString()).split(' ')})
		this.getRandomColor();
	};


	render() {
		return (
			<View style={[styles.box, {
				backgroundColor: this.state.color,
			}]}>
				<Text style={[styles.text ,styles.time]}>
					{`${this.state.date[2]} ${this.state.date[1]}`}
				</Text>
				<Text style={[styles.text ,styles.title]}>
					{(JSON.parse(this.props.properties).title).toUpperCase()}
				</Text>
				<Text style={[styles.text ,styles.content]}>
					{JSON.parse(this.props.properties).content}
				</Text>
			</View>
		);
	}
}

const margin = ((Dimensions.get('window').width) - (Dimensions.get('window').width - 50)) / 2;

const styles = StyleSheet.create({
	box: { 
		height: 150, 
		width: Dimensions.get('window').width - 50,
		backgroundColor: 'blue',
		borderRadius: 10,
		marginLeft: margin,
		marginRight: margin, 
		marginTop: margin,
		padding: 15,
	},
	time: {
		textAlign: 'right',
	},
	title: {
		fontSize: 25,
		marginBottom: 15,
		fontWeight: 'bold'
	},
	text: {
		color: 'white',
	},
})

export default SingleNote;
