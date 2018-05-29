import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { CustomButton } from './FromElements'
import { displayAuth } from '../../actions'
import { authScreenConst } from '../../constants'
	
const Sent = ({ _toLogIn }) =>
	<View style={styles.container}>
		<Text style={styles.description}>
			Instructions are sent to your email
		</Text>
		<View style={styles.forgotContainer}>
			<Text style={styles.forgotText}>Back to</Text>
			<CustomButton type='link' text='Log in' onPress={_toLogIn} />
		</View>
	</View>
	
export default compose(
	connect(null, { displayAuth }),
	withHandlers({
		_toLogIn: ({ displayAuth }) => () => displayAuth(authScreenConst.LOG_IN)
	})
)(Sent)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	description: {
		textAlign: 'center',
		fontSize: 14,
		color: 'grey'
	},
	forgotContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},
	forgotText: {
		textAlign: 'center',
		fontSize: 14,
		color: 'grey'
	},
})