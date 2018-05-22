import React from 'react'
import { ActivityIndicator, Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { mainInObj } from '../helpers/state'
import { quoteRequest } from '../actions'

const Root = ({ main, _quoteRequest }) => 
	<View style={styles.container}>

		{ main.fetchStatus === 'NONE' &&
			<Button title='Fetch a Random Quote' onPress={_quoteRequest} /> }

		{ main.fetchStatus === 'FETCHING' &&
			<ActivityIndicator /> }
		
		{ main.fetchStatus === 'FETCHED' &&
			<View style={styles.container}>
				<Button title='Refresh Quote' onPress={_quoteRequest} />
				<Text style={styles.quote}>{main.quote}</Text>
				<Text style={styles.author}>{main.author}</Text>
			</View> }
	</View>

export default compose(
	connect(mainInObj, { quoteRequest }),
	withHandlers({
		_quoteRequest: ({ quoteRequest }) => () => quoteRequest()
	}),
)(Root)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	quote: {
		margin: 20,
		textAlign: 'center'
	},
	author: {
		marginTop: 20,
		fontStyle: 'italic'
	},
	
})
