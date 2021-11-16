import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, BackHandler, Dimensions, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from 'expo-sharing';

class BigPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	delete = async () => {
		await MediaLibrary.deleteAssetsAsync([this.props.route.params.id]);
		this.props.route.params.refresh()
		this.props.navigation.goBack()
		return true;
	}

	share = async () => {
		await Sharing.shareAsync(this.props.route.params.uri, {
			UTI: 'image/jpeg' 
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: this.props.route.params.uri }}
				/>
				<View style={styles.buttonsWrapper}>
					<TouchableOpacity onPress={this.delete}>
						<Image
							style={{ 
								height: 50,
								width: 50,
							}}
							source={require('../images/trash.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.share}>
						<Image
							style={{ 
								height: 50,
								width: 70,
							}}
							source={require('../images/share.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	image: {
		width: 350,
		height: 550,
		marginTop: 50,
		borderRadius: 50
	},	
	buttonsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		bottom: 50,
		width: Dimensions.get('window').width,
	},
})

export default BigPhoto;
