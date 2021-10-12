import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Item from './components/cwiczenie2/Item';

export default class App extends React.Component {
  render() {

	let items = [
		{ text: 'Header', style: styles.header },
		{ text: 'Content', style: styles.content },
		{ text: 'Footer', style: styles.footer }
	]
	
	return (
      <View style={{flex: 1,}}>
		  <Item compStyles={ items[0].style } text={ items[0].text } textStyles={ styles.text } />
		  <Item compStyles={ items[1].style } text={ items[1].text } textStyles={ styles.text } />
		  <Item compStyles={ items[2].style } text={ items[2].text } textStyles={ styles.text } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		backgroundColor: 'red',
	},
	content: {
		flex: 3,
		backgroundColor: 'green',
	},
	footer: {
		flex: 1,
		backgroundColor: 'blue',
	},
	text: {
		fontSize: 48,
	}
})

