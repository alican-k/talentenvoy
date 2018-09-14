import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { logOut } from '../../actions'
	
const Settings = ({ _logOut }) =>
	<View style={styles.container}>
		<Button title='Log out' onPress={_logOut} />
	</View>
	
export default compose(
	connect(null, { logOut }),
	withHandlers({
		_logOut: ({ logOut }) => () => logOut()
	})
)(Settings)
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})