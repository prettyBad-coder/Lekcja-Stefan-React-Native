import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './components/cwiczenie7/Item';

class App07 extends Component {
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
		let arr = this.state.colors.map((element, index) => {
			let direction = index % 2 == 0 ? 'column' : 'column-reverse';
			return (
				<View style={{ flex: 1, backgroundColor: element, flexDirection: direction }} key={ index }>
					{
						this.state.colors.map((item, i) => {
							return (
								<Item color={ item } index={ i } key={ i }/>
							)
						})
					}
				</View>
			)
		})


		// this.state.colors.forEach((element, index) => {
		// 	arr.push(
		// 		<Item color={ element } key={ index } index={ index } />
		// 	)
		// })

		return (
			<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#303030' }}>
				{/* <View style={{ flex: 1 }}>
					{ arr }
				</View>
				<View style={{ flex: 1, flexDirection: 'column-reverse' }}>
					{ arr }
				</View>
				<View style={{ flex: 1 }}>
					{ arr }
				</View>
				<View style={{ flex: 1, flexDirection: 'column-reverse' }}>
					{ arr }
				</View>
				<View style={{ flex: 1 }}>
					{ arr }
				</View>
				<View style={{ flex: 1, flexDirection: 'column-reverse' }}>
					{ arr }
				</View> */}
				{ arr }
			</View>
		);
	}
}

export default App07;
