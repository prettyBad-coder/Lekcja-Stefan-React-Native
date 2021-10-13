import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Output from './components/kalkulator/Output'
import Button from './components/kalkulator/Button'


class Kalkulator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chars: [
				[1, 4, 7, '.'],
				[2, 5, 8, 0],
				[3, 6, 9, '='],
				['C', '/', '*', '-', '+']
			], 
			previosValue: {
				string: '',
				iteration: 0
			},
			outputString: '',
			pressedEqual: true
		};
	}

		
	buttonClick = (value) => {
		let outputString = this.state.outputString.toString();
		if(value == '=') {
			let result = eval(this.state.outputString)
			this.setState({ pressedEqual: !this.state.pressedEqual, outputString: result})
		} else if (value == 'C') {
			outputString = outputString.substring(0, outputString.length - 1);
			this.setState({ outputString: outputString })
		} else {
			if(this.state.pressedEqual) {
				outputString = ''
				this.setState({ pressedEqual: !this.state.pressedEqual })
			}
			outputString += value;
			this.setState({ outputString: outputString });
		}
	}

	onLongPress = () => this.setState({outputString: ''});

	render() {

		return (
			<View style={{ flex: 1, backgroundColor: '#303030'}}>
				<Output string={ this.state.outputString } />
				<View style={ styles.columnsContainer }>
					{
						this.state.chars.map((element, index) => {
							return (
								<View style={{ flex: 1, backgroundColor: index == 3 ? '#505050' : '#404040'}} key={ index }>
									{
										element.map((item, i) => {
											return (
												<Button buttonPress={ this.onLongPress } buttonClick={ this.buttonClick } name={ item } key={ i }/>
											)
										})
									}
								</View>
							)
						})
					}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	columnsContainer: {
		flex: 3,
		flexDirection: 'row',
		flexWrap: 'wrap',
		// backgroundColor: 'red'
	},
	column: {
		flex: 1,
	}
});

export default Kalkulator;
