import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		console.log(this.props.route.params)

		const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: '#303030',
			},
			text: {
				color: this.props.route.params.color,
				fontSize: 25,
			},
			textBasic: {
				color: '#505050',
				marginRight: 10,
				fontSize: 25,
			},
			containerBasic: {
				marginRight: 2,
			},
			box: {
				marginTop: 20,
				flexDirection: 'row',
			},
		})

		return (
			<View style={styles.container}>
				<View style={styles.box}>
					<View style={styles.containerBasic}>
						<Text style={styles.textBasic}>
							Login:
						</Text>
					</View>
					<View style={styles.containerBasic}>
						<Text style={styles.text}>
							{this.props.route.params.name}
						</Text>
					</View>
				</View>
				<View style={styles.box}>
					<View style={styles.containerBasic}>
						<Text style={styles.textBasic}>
							Password:
						</Text>
					</View>
					<View style={styles.containerBasic}>
						<Text style={styles.text}>
							{this.props.route.params.password}
						</Text>
					</View>
				</View>
				<View style={styles.box}>
					<View style={styles.containerBasic}>
						<Text style={styles.textBasic}>
							Registered:
						</Text>
					</View>
					<View style={styles.containerBasic}>
						<Text style={styles.text}>
							{this.props.route.params.date}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default Details;
