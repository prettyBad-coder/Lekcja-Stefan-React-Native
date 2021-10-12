import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './components/cwiczenie4/Item';

class App03 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [
				'#264653',
				'#2a9d8f',
				'#e9c46a',
				'#f4a261',
				'#e76f51',
				'#e63946',
			],
		};
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#303030' }}>
				<View style={{ flex: 1, flexDirection: 'column' }}>
					{ this.state.colors.map((element, index) => {
						return (
							<Item color={ element } index={ index } />
						)
					}) }
				</View>
				<View style={{ flex: 1, flexDirection: 'column-reverse' }}>
					{ this.state.colors.map((element, index) => {
						return (
							<Item color={ element } index={ index } />
						)
					}) }
				</View>
			</View>
		);
	}
}

export default App03;
