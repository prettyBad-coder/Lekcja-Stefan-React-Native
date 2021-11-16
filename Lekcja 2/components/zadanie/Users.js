import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import settings from '../../settings.json';
import ListItem from './ListItem';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	componentDidMount = () => {
		axios.get(`http://${settings.settings.IP}:${settings.settings.PORT}/getUsers`)
		.then(res => { this.setState({users: res.data}) })
		.catch(error => console.log(error));
	}
	
	componentDidUpdate = () => {
		console.log(this.state.users)
	}

	deleteUser = (userID) => {
		axios.post(`http://${settings.settings.IP}:${settings.settings.PORT}/deleteUser`, {
			userID: userID
		})
		.then(res => {
			this.setState({users: res.data})
		})
		.catch(error => console.log(error));
	}

	render() {
		return (
			<FlatList 
				keyExtractor={ (item) => item.id }
				style={{ backgroundColor: '#303030' }}
				data={ this.state.users }
				renderItem={({ item }) => (
					<ListItem properties={ item } navigation={this.props.navigation} deleteUser={ this.deleteUser } />
				)}
			/>
		);
	}
}

export default Users;
