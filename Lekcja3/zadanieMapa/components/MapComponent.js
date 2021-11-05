import React, { Component } from 'react';
import MapView from 'react-native-maps';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startPosition: {
				lat: 49.9752400,
				lng: 19.8286900
			},
			delta: 0.008
		};
	}

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: this.state.startPosition.lat,
					longitude: this.state.startPosition.lng,
					latitudeDelta: this.state.delta,
					longitudeDelta: this.state.delta,
			}}>
				{
					this.props.route.params.markers.map((element, index) => {
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
