import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import MyButton from './MyButton';
import FotoItem from './FotoItem';

class PhotosPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numColumns: 4,
			clickedPhotosArr: [],
		};
	}

	gridOrListClick = () => this.setState({numColumns: this.state.numColumns === 4 ? 1 : 4});

	goToCamera = () => { 
		this.props.navigation.navigate('cameraComponent', {
			refresh: this.refresh
		});
	}

	componentDidMount = async () => {
		let { status } = await MediaLibrary.requestPermissionsAsync();
		if(status !== 'granted') alert('Brak uprewnień do galerii');
	
		let obj = await MediaLibrary.getAssetsAsync({
			first: 100,
			mediaType: 'photo',
		});

		obj.assets.forEach(element => {
			element.clicked = false;
		}) 

		this.setState({imagesArr: obj.assets});
	}

	refresh = async () => {
		let obj = await MediaLibrary.getAssetsAsync({
			first: 100,
			mediaType: 'photo',
		});

		obj.assets.forEach(element => {
			element.clicked = false;
		}) 

		this.setState({imagesArr: obj.assets});
	}

	photoClick = (id) => {
		let arr = this.state.clickedPhotosArr;
		let imagesArr = this.state.imagesArr;
		if(arr.includes(id)) {
			let filteredArr = arr.filter(element => {
				if(element !== id) return element 
			})
			arr = filteredArr
		} else arr.push(id);
		console.log(arr)
		imagesArr.forEach(element => {
			if(element.id === id) element.clicked = !element.clicked
		})


		this.setState({
			clickedPhotosArr: arr,
			imagesArr: imagesArr,
		})
	}

	deletePhotos = async () => {
		await MediaLibrary.deleteAssetsAsync(this.state.clickedPhotosArr);
		this.refresh();
	}

	_photoLongPress = (id) => {
		console.log(id);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonsWrapper}>
					<MyButton onClick={this.gridOrListClick} containerStyle={styles.myButtonContainer} textStyle={styles.myButtonText} name={'Grid/List'} />
					<MyButton onClick={this.goToCamera} containerStyle={styles.myButtonContainer} textStyle={styles.myButtonText} name={'Open camera'} />
					<MyButton onClick={this.deletePhotos} containerStyle={styles.myButtonContainer} textStyle={styles.myButtonText} name={'Remove Selected'} />
				</View>
				<View style={{ flex: 10, minHeight: 500 }}>
					<FlatList
						numColumns={this.state.numColumns}
						data={this.state.imagesArr}
						renderItem={(element) => {return (
							<FotoItem onLongClick={this._photoLongPress} clickFun={this.photoClick} uri={element.item.uri} numColumns={this.state.numColumns} id={element.item.id} clicked={element.item.clicked}/>
						)}}
						key={this.state.numColumns}
						keyExtractor={element => element.id}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// height: Dimensions.get("window").height,
		// width: Dimensions.get("window").width,
		flex: 1,
		backgroundColor: 'white',
	},
	buttonsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	myButtonText: {
		fontSize: 15,
		color: 'white',
		backgroundColor: '#4361ee',
		borderWidth: 7,
		padding: 7,
		borderColor: '#4cc9f0',
		borderRadius: 10,
		shadowColor: "#000",
		overflow: 'hidden'
	},
	myButtonContainer: {
		color: 'white',
		fontWeight: '700',
		padding: 7,
	}
})

export default PhotosPage;
