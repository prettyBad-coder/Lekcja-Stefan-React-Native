import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, ActivityIndicator, Dimensions, Image } from 'react-native';
// import { AsyncStorage } from "react-native";
import MapItem from './ListItem';
import * as Location from "expo-location";
import MyButton from './MyButton';


class MapList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positions: [
				{id: 0, lat: 49.9752400, lng: 19.8286900, state: false },
				{id: 1, lat: 49.971070, lng: 19.829205, state: false },
				{id: 2, lat: 49.973091, lng: 19.831734, state: false },
			],
			colors: [
				'#3a86ff',
				'#8338ec',
				'#ff006e',
				'#fb5607',
				'#ffbe0b',
				'#3a86ff',
				'#8338ec',
				'#ff006e',
				'#fb5607',
				'#ffbe0b',
				'#3a86ff',
				'#8338ec',
				'#ff006e',
				'#fb5607',
				'#ffbe0b',
				'#3a86ff',
				'#8338ec',
				'#ff006e',
				'#fb5607',
				'#ffbe0b',
			],
			switchState: false,
			gettingPosition: false,
		};
	}
	


	componentDidMount = async () => this.setPermissions(); 

	setPermissions = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if(status !== 'granted')
			alert('Odmawiam przydzielenia uprawnień do czytania lokalizacji');
	}

	getPosition = async () => {
		this.setState({gettingPosition: true})
		let positionsArr = this.state.positions;
		let position = await Location.getCurrentPositionAsync();
		let obj = {
			id: positionsArr.length != 0 ? positionsArr[positionsArr.length - 1].id + 1 : 0,
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		};
		positionsArr.push(obj);
		this.setState({ 
			positions: positionsArr, 
			gettingPosition: false 
		})
	}

	deletePositions = async () => this.setState({ positions: [] });

	goToMap = () => {
		this.props.navigation.navigate('map-component', {
			markers: this.state.positions
		});
	}

	switchChange = (id) => {
		let pos = this.state.positions
		pos.forEach((element, index) => {
			if(index == id) 
				element.state = !element.state
		})
		this.setState({positions: pos})
	}

	mainSwitchChange = () => {
		let pos = this.state.positions;
		pos.forEach(element => {
			// false i true sa odwrocone bo state mainSwitcha jest zmianiany dopiero po tym foreachu
			element.state = this.state.switchState ? false : true
		});
		this.setState({ 
			switchState: !this.state.switchState, 
			positions: pos
		})
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.buttonsWrapper }>
					<MyButton name="Get position" onClick={ this.getPosition } textStyle={{ fontSize: 25 }} />
					<MyButton name="Delete positions" onClick={ this.deletePositions } textStyle={{ fontSize: 25, color: 'red'}} />
					<View style={styles.goToMapButtonWrapper}>
						<MyButton name="Go to map" onClick={ this.goToMap } textStyle={{ fontSize: 40 }} containerStyle={{ marginTop: 20 }} />
						<Image
							style={styles.pinImage}
							source={ require('../images/pin.png') }
						/>
					</View>
				</View>
				<View style={ styles.switchWrapper }>
					<Text>
						Turn on all:
					</Text>
					<Switch 
						style={ styles.mainSwitch }
						onValueChange={ this.mainSwitchChange }
						value={ this.state.switchState }
					/>
				</View>
				<FlatList
					keyExtractor={item => item.id}
					data={ this.state.positions }
					renderItem={({item}) => (
						<MapItem switchChange={ this.switchChange } color={ this.state.colors[item.id] } lat={item.lat} lng={item.lng} id={ item.id } state={ item.state }/>
					)}
				/>
				{
					this.state.gettingPosition
					?
					<View style={styles.activityIndicatorContainer}>
						<ActivityIndicator size="large" style={styles.activityIndicator}/>
					</View>
					:
					null
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	activityIndicatorContainer: {
		flex: 1,
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		position: 'absolute',
		backgroundColor: 'black',
		alignItems: 'center',
		opacity: 0.5,
	},
	activityIndicator: {
		margin: 300,
	},
	buttonsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
	switchWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	mainSwitch: {
		marginLeft: 5,
	},
	goToMapButtonWrapper: {
		position: 'relative',
		marginBottom: 15,
	},
	pinImage: {
		height: 40,
		width: 40,
		position: 'absolute',
		right: -35,
		top: 20,
	},
})

export default MapList;
