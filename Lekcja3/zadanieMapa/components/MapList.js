import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AsyncStorage } from "react-native";
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
			]
		};
	}
	
	componentDidMount = async () => { this.setPermissions(); }

	setPermissions = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if(status !== 'granted')
			alert('Odmawiam przydzielenia uprawnień do czytania lokalizacji');
	}

	getPosition = async () => {
		let positionsArr = this.state.positions;
		let position = await Location.getCurrentPositionAsync();
		let obj = {
			id: positionsArr.length != 0 ? positionsArr[positionsArr.length - 1].id + 1 : 0,
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		};
		positionsArr.push(obj);
		this.setState({ positions: positionsArr })
	}

	addPosition = async () => {
		let date = new Date();
		let now = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	}

	deletePositions = async () => this.setState({ positions: [] });

	goToMap = () => {
		this.props.navigation.navigate('map-component', {
			markers: this.state.positions
		});
	}

	switchChange = (obj) => {
		console.log(obj)
		let pos = this.state.positions
		this.state.positions.forEach((element, index) => {
			if(index == obj.id) {
				pos[obj.id].state = !pos[obj.id].state
			}
		})
		console.log(this.state.positions)
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.buttonsWrapper }>
					<MyButton name="Get position" onClick={ this.getPosition } textStyle={{ fontSize: 25 }} />
					<MyButton name="Delete positions" onClick={ this.deletePositions } textStyle={{ fontSize: 25, color: 'red'}} />
					<MyButton name="Go to map" onClick={ this.goToMap } textStyle={{ fontSize: 40 }} containerStyle={{ marginTop: 20 }} />
				</View>
				<FlatList
					keyExtractor={item => item.id}
					data={ this.state.positions }
					renderItem={({item}) => (
						<MapItem switchChange={ this.switchChange } color={ this.state.colors[item.id] } lat={item.lat} lng={item.lng} id={ item.id } state={ item.state }/>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
})

export default MapList;
