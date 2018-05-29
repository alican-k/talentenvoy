import React from 'react'
import { ActivityIndicator, Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, branch, withHandlers, renderComponent } from 'recompose'
import { mainInObj, isFetchStatusNone, isFetchStatusFetching, isFetchStatusError } from '../../helpers/state'
import { quoteRequest } from '../../actions'
import ForceCrash from './ForceCrash'
import LogOut from './LogOut'

const None = ({ _quoteRequest }) => <Button title='Fetch a Random Quote' onPress={_quoteRequest} />

const Fetching = () => <ActivityIndicator />

const Error = ({ _quoteRequest }) => [
	<Button key='button' title='Refresh Quote' onPress={_quoteRequest} />,
	<Text key='error' style={styles.quote}>Error occured, try again..</Text>
]

const Fetched = ({ main, _quoteRequest }) => [
	<Button key='button' title='Refresh Quote' onPress={_quoteRequest} />,
	<Text key='quote' style={styles.quote}>{main.quote}</Text>,
	<Text key='author' style={styles.author}>{main.author}</Text>,
]

const FetchStatusBranch = compose(
	connect(mainInObj, { quoteRequest }),
	withHandlers({
		_quoteRequest: ({ quoteRequest }) => () => quoteRequest()
	}),
	branch(isFetchStatusNone, renderComponent(None)),
	branch(isFetchStatusFetching, renderComponent(Fetching)),
	branch(isFetchStatusError, renderComponent(Error)),	
)(Fetched)

const HomeScreen = () => 
	<View style={styles.container}>
		<FetchStatusBranch />
		<ForceCrash />
		<LogOut />
	</View>

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
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
