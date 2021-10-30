import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";
import * as Location from "expo-location";
import MapView from 'react-native-maps';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startPosition: {
				lat: 49.9752400,
				lng: 19.8286900
			}
		};
	}

	componentDidMount = () => {
		console.log(this.props.route.params.markers);
	}

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: this.state.startPosition.lat,
					longitude: this.state.startPosition.lng,
					latitudeDelta: 0.001,
					longitudeDelta: 0.001,
			}}>
				{
					this.props.route.params.markers.map((element, index) => {
						console.log(element)
						if(element.state) {
							return(
								<MapView.Marker
									coordinate={{ 
										latitude: element.lat,
										longitude: element.lng,
									}}
									key={ index }
								/>
							)
						}
					})
				}
				<MapView.Marker
					coordinate={{ 
						latitude: 50.111,
						longitude: 20.111,
					}}
					title={ 'pos' }
					description={ 'opis' }
				/>
			</MapView>
		);
	}
}

export default App;
