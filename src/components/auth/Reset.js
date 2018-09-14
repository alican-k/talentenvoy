import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'
import { CustomButton } from './FromElements'
import { displayAuth, reset } from '../../actions'
import { auth } from '../../helpers/state'
import { simpleStateHandlers } from '../../helpers/utils'
import { authScreenConst } from '../../constants'

const Reset = ({ operating, email, setEmail, _reset, _toLogIn }) =>
	<View style={styles.container}>
		<Text style={styles.description}>Instructions will be sent to your email</Text>
		<TextInput
			style={styles.input} 
			placeholder='Email'
			keyboardType='email-address'
			autoCapitalize='none'
			underlineColorAndroid='transparent'
			onChangeText={setEmail}
		/>
		<CustomButton 
			type='primary' 
			text='Reset' 
			onPress={_reset} 
			animation={operating}
			disabled={operating}
		/>

		<Text style={styles.or}>OR</Text>
		
		<View style={styles.forgotContainer}>
			<Text style={styles.forgotText}>Return to</Text>
			<CustomButton 
				type='link' 
				text='Log in' 
				onPress={_toLogIn}
				disabled={operating}
			/>
		</View>
	</View>

export default compose(
	connect(auth.self, { reset, displayAuth }),
	simpleStateHandlers({ email: ''}),
	withHandlers({
		_reset			: ({ email, reset }) 	=> () => reset(email),
		_toLogIn		: ({ displayAuth }) 	=> () => displayAuth(authScreenConst.LOG_IN),		
	}),
	withProps(auth.pick(['operating'])),
)(Reset)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	description: {
		textAlign: 'center',
		margin: 10
	},
	input: {
		height: 36,
		borderRadius: 18,
		backgroundColor: 'white',
		margin: 10,
		marginHorizontal: 45,
		textAlign: 'center',
		letterSpacing: 1,
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#bbbbbb'
	},
	or: {
		alignSelf: 'center',
		marginTop: 25,
		fontSize: 14,
		color: '#aaaaaa'
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