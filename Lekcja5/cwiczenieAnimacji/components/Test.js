import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Button, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import MyButton from './MyButton';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pos: new Animated.Value(400),  //startowa pozycja y wysuwanego View
		};
		this.isHidden = true
	}

	toggle = () => {
		let toPos = this.isHidden ? 150 : 400; 

		//animacja
		Animated.spring(
			this.state.pos, {
				toValue: toPos,
				velocity: 1,
				tension: 0,
				friction: 10,
				useNativeDriver: true
			}
		).start();

		this.isHidden = !this.isHidden;
	}
	
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#303030', justifyContent: 'flex-start', alignItems: 'flex-end', padding: 50, }}>

				<Animated.View
					style={[
						styles.animatedView, {
							transform: [
								{ translateX: this.state.pos }
							]
						}]} >
						<ScrollView>
							<TouchableOpacity style={{ marginTop: 100 }}>
								<Text>
									Siema eniu
								</Text>
							</TouchableOpacity>
						</ScrollView>
				</Animated.View>
				<MyButton onClick={this.toggle} name={'start'} styleContainer={styles.button} />

			</View>
		);
	}
}


var styles = StyleSheet.create({
	animatedView: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "gray",
		height: Dimensions.get('window').height,
	},
	button: {
		borderWidth: 5,
		marginRight: 50,
		color: 'red',
	}
});

export default Test
