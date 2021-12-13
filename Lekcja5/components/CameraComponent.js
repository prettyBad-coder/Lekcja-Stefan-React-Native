import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, Animated, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Camera } from "expo-camera";
import CircleButton from './CircleButton';
import * as MediaLibrary from "expo-media-library";
import MyButton from './MyButton';
import RadioGroup  from './RadioGroup';
import { manipulateAsync } from 'expo-image-manipulator'

class CameraComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,			// przydzielone uprawnienia do używania kamery
			type: Camera.Constants.Type.back, 	// typ kamery
			pos: new Animated.Value(400),
			sizes: [],
			size: '1280x720',
			ratio: '4:3',
		};
		this.isHidden = true;
	}

	handleBackPress = () => {
		this.props.route.params.refresh()
		this.props.navigation.goBack()
		return true;
	}

	getSizes = async () => {
		if (this.camera) {
			const sizes = await this.camera.getAvailablePictureSizesAsync('16:9')
			this.setState({sizes: sizes});
		}
	};

	componentDidMount = async () => {
		let {status} = await Camera.requestCameraPermissionsAsync();
		this.setState({hasCameraPermission: status == 'granted'});
		BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
		this.getSizes();
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
		
		if(this.camera && this.isHidden) {
			try {
				let foto = await this.camera.takePictureAsync();
				const currentSize = this.state.size.split('x')
				const photo = await manipulateAsync(foto.uri, [{ resize: { width: parseInt(currentSize[0]), height: parseInt(currentSize[1]) } }])
				let asset = await MediaLibrary.createAssetAsync(photo.uri);
			} catch (err) {
				alert(`Error:\n${err}`)
			}
		}
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

	changeWB = (val) => this.setState({wb: val});

	changeFM = (val) => this.setState({fm: val});

	changeRatio = (val) => this.setState({ratio: val});

	changeSize = (val) => this.setState({size: val});

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
						style={{ flex: 1, position: 'relative' }}
						type={this.state.type}
						whiteBalance={Camera.Constants.WhiteBalance[this.state.wb]}
						flashMode={Camera.Constants.FlashMode[this.state.fm]}
						ratio={this.state.ratio}
						pictureSize={this.state.size}
					>
						<CircleButton name={require('../images/settings.png')} onClick={this.toggle} containerStyle={styles.circleButtonContainerZero} />
						<MyButton name={'<'} onClick={this.handleBackPress} textStyle={{ color: '#f72585', fontSize: 50 }} containerStyle={styles.backHandlerStyle} />
						<Animated.View
							style={[
							styles.animatedView, {
								transform: [
									{ translateX: this.state.pos }
								]
							}]}
						>
							<View style={styles.closeButtonWrapper}>
								<MyButton name={'x'} onClick={this.toggle} textStyle={{ color: '#f72585', fontSize: 50 }} containerStyle={styles.closeButton} />
							</View>
							<ScrollView style={styles.scrollView}>
								<RadioGroup 
									title="white ballance" 
									data={['sunny', 'shadow', 'incandescent', 'fluorescent', 'auto', 'cloudy']} 
									onChange={this.changeWB}	
								/>
								<RadioGroup 
									title="flash mode" 
									data={['auto', 'off', 'on', 'torch']} 
									onChange={this.changeFM}	
								/>
								<RadioGroup 
									title="ratio" 
									data={['4:3', '16:9']} 
									onChange={this.changeRatio}	
								/>
								<RadioGroup 
									title="sizes" 
									data={this.state.sizes} 
									onChange={this.changeSize}	
								/>
							</ScrollView>
						</Animated.View>
						<View style={styles.buttonsWrapper}>
							<CircleButton name={require('../images/rotate.png')} onClick={this.rotateCamera} containerStyle={styles.circleButtonContainer} />
							<CircleButton name={require('../images/takePhoto.png')} onClick={this.takePhoto} containerStyle={styles.circleButtonContainer} />
						</View>
					</Camera>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	circleButtonContainer: {
		height: 70,
		width: 70,
		borderWidth: 5,
		borderColor: '#f72585',
		borderRadius: 1000,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleButtonContainerZero: {
		height: 100,
		width: 100,
		borderWidth: 5,
		borderColor: 'transparent',
		borderRadius: 1000,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 30,
		right: 0,
	},
	buttonsWrapper: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		marginBottom: 100,
		position: 'absolute',
		height: 200,
		bottom: -85,
		left: 15,
		maxWidth: 70,
		width: Dimensions.get('window').width,
	},
	backHandlerStyle: {
		position: 'absolute',
		top: 50,
		left: 30,
	},
	animatedView: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#202020',
		height: Dimensions.get('window').height,
	},
	closeButtonWrapper: {
		marginTop: 45,
		alignItems: 'flex-end',
		paddingRight: 170,
	},
	scrollView: {
		flex: 1,
		marginBottom: 30,
	}
})

export default CameraComponent;
