import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

class FotoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			margin: 3,
		};
	}

	click = () => {
		this.props.clickFun(this.props.id);
		this.setState({clicked: this.state.clicked ? false : true});
	}
	
	onLongClick = () => {
		this.props.onLongClick(this.props.uri, this.props.id);
	}

	render() {

		const styles = StyleSheet.create({
			container: {
				position: 'relative',
				margin: this.state.margin,
				// backgroundColor: 'red',
			},
			background: {
				position: 'absolute',
				width: (Dimensions.get('window').width / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2)),
				height: (Dimensions.get('window').height / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2)),
				zIndex: 1,
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0,0,0,0.54)',
			},
			plusVertical: {
				position: 'absolute',
				backgroundColor: '#f72585',
				width: 5,
				height: ((Dimensions.get('window').width / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2))) - (this.state.margin * 2),
				top: (Dimensions.get('window').width / this.props.numColumns) / 2,
				left: ((Dimensions.get('window').width / this.props.numColumns) / 2) - 5,
			},
			plusHorizontal: {
				position: 'absolute',
				backgroundColor: '#f72585',
				width: ((Dimensions.get('window').width / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2))) - (this.state.margin * 2),
				height: 5,
				top: ((Dimensions.get('window').height / this.props.numColumns) / 2.5) + 5,
				left: (((Dimensions.get('window').width / this.props.numColumns) / 2) - (Dimensions.get('window').width / this.props.numColumns) / 2) + this.state.margin,
			}
		})

		return (
			<TouchableOpacity onLongPress={this.onLongClick} onPress={this.click} style={styles.container}>
				<View style={[styles.background, {
					display: this.props.clicked ? 'block' : 'none'
				}]}>
					<View style={styles.plusVertical}></View>
					<View style={styles.plusHorizontal}></View>
				</View>
				<Image
					style={{ 
						width: (Dimensions.get('window').width / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2)),
						height: (Dimensions.get('window').height / this.props.numColumns) - (this.state.margin * (this.props.numColumns - 2)),
					}}
					source={{ uri: this.props.uri }}
				/>
			</TouchableOpacity>
		);
	}
}

export default FotoItem;
