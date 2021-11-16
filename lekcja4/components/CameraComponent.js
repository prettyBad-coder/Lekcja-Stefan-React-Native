import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { Camera } from "expo-camera";
import CircleButton from './CircleButton';
import * as MediaLibrary from "expo-media-library";
import MyButton from './MyButton';

class CameraComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,			// przydzielone uprawnienia do używania kamery
			type: Camera.Constants.Type.back, 	// typ kamery
		};
	}

	handleBackPress = () => {
		this.props.route.params.refresh()
		this.props.navigation.goBack()
		return true;
	}

	componentDidMount = async () => {
		let {status} = await Camera.requestCameraPermissionsAsync();
		this.setState({hasCameraPermission: status == 'granted'});
		BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
	}

	componentWillUnmount = () => {
		BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
	}

	rotateCamera = () => {
		this.setState({
			type: this.state.type === Camera.Constants.Type.back 
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		})
	}

	takePhoto = async () => {
		if(this.camera) {
			let photo = await this.camera.takePictureAsync();
			let asset = await MediaLibrary.createAssetAsync(photo.uri);
		}
	}

	render() {
		const {hasCameraPermission} = this.state;
		if(hasCameraPermission == null) {
			return(
				<View>
					<Text>
						Ni ma nic
					</Text>
				</View>
			)
		} else if(hasCameraPermission == false) {
			return(
				<View>
					<Text>
						Nie ma permisji do kamery
					</Text>
				</View>
			)
		} else {
			return(
				<View style={{ flex: 1 }}>
					<Camera
						ref={ref => {
							this.camera = ref; // Uwaga: referencja do kamery używana później
						}}
						style={{ flex: 1 }}
						type={this.state.type}
					>
						<View style={styles.buttonsWrapper}>
							<CircleButton name={require('../images/rotate.png')} onClick={this.rotateCamera} containerStyle={styles.circleButtonContainer} />
							<CircleButton name={require('../images/takePhoto.png')} onClick={this.takePhoto} containerStyle={styles.circleButtonContainer} />
							<MyButton name={'<'} onClick={this.handleBackPress} textStyle={{ color: '#f72585', fontSize: 50 }} containerStyle={styles.backHandlerStyle} />
						</View>
					</Camera>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	circleButtonContainer: {
		height: 100,
		width: 100,
		borderWidth: 5,
		borderColor: '#f72585',
		borderRadius: 1000,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonsWrapper: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		flexDirection: 'row',
		marginBottom: 100,
		position: 'relative',
	},
	backHandlerStyle: {
		position: 'absolute',
		top: 50,
		left: 30,
	},
})

export default CameraComponent;
