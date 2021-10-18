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

	removeLastChar = (string) => string.substring(0, string.length - 1);
		
	buttonClick = async (value) => {
		let outputString = this.state.outputString.toString();
		if(value == '=') {
			try {
				this.setState({ pressedEqual: !this.state.pressedEqual, outputString: this.state.outputString == '' ? '' : eval(this.state.outputString)})
			} catch (error) {
				this.setState({outputString: 'error'});
			}
		} else if (value == 'C') {
			this.setState({ outputString: this.removeLastChar(outputString) })
		} else {
			let previousChar = isNaN(parseInt(this.state.outputString[this.state.outputString.length - 1]));

			if(!previousChar || typeof(value) != 'string'){
				if(this.state.pressedEqual) {
					outputString = '';
					this.setState({ pressedEqual: !this.state.pressedEqual })
				}
				outputString += value;
				this.setState({ outputString: outputString });
			} else {
				let string = this.removeLastChar(this.state.outputString);
				string += value;
				this.setState({outputString: string});
			}
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
