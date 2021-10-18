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
			outputString: '',
			pressedEqual: true
		};
	}

	removeLastChar = (string) => string.substring(0, string.length - 1);
		
	buttonClick = async (value) => {
		let outputString = this.state.outputString.toString();
		switch (value) {
			case '=':
				try {
					this.setState({ 
						pressedEqual: !this.state.pressedEqual, 
						outputString: this.state.outputString == '' ? '' : eval(this.state.outputString)
					});
				} catch (error) {
					this.setState({outputString: 'error'});
				}
				break;
			case 'C':
				this.setState({ outputString: this.removeLastChar(outputString) })
				break;
			default:
				let previousChar = this.state.outputString[this.state.outputString.length - 1];
				if(!isNaN(parseInt(previousChar)) || typeof(value) != 'string'){
					this.setState({ 
						outputString: this.state.pressedEqual ? (value) : (outputString + value),
						pressedEqual: this.state.pressedEqual ? false : undefined
					});
				} else {
					this.setState({outputString: this.removeLastChar(this.state.outputString) + value});
				}
				break;
		}
	}

	onLongPress = (name) => {
		if(name == 'C') this.setState({outputString: ''});
		else this.buttonClick(name)
	}

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
	},
	column: {
		flex: 1,
	}
});

export default Kalkulator;
