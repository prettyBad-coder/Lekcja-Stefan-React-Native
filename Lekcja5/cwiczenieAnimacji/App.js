import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import Test from './components/Test';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<Test/>
		);
	}
}

export default App;
