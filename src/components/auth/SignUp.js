import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'
import { CustomButton } from './FromElements'
import { signUp, displayAuth } from '../../actions'
import { auth } from '../../helpers/state'
import { simpleStateHandlers } from '../../helpers/utils'
import { authScreenConst } from '../../constants'

const SignUp = ({ operating, setName, setEmail, setPassword, _signUp, _toLogIn }) =>
	<View style={styles.container}>
		<TextInput 
			style={styles.input} 
			placeholder='First Name' 
			autoCapitalize='none' 
			underlineColorAndroid='transparent'
			onChangeText={setName} />
		<TextInput 
			style={styles.input} 
			placeholder='Email' 
			keyboardType='email-address' 
			autoCapitalize='none' 
			underlineColorAndroid='transparent'
			onChangeText={setEmail} />
		<TextInput 
			style={styles.input} 
			placeholder='Password' 
			autoCapitalize='none' 
			secureTextEntry={true} 
			underlineColorAndroid='transparent'
			onChangeText={setPassword} />

		<CustomButton type='primary' text='Sign Up' onPress={_signUp} animation={operating} />

		<Text style={styles.or}>OR</Text>

		<View style={styles.forgotContainer}>
			<Text style={styles.forgotText}>Have an account?</Text>
			<CustomButton type='link' text='Log in now!' onPress={_toLogIn} animation={operating} />
		</View>
	</View>

export default compose(
	connect(auth.self, {signUp, displayAuth}),
	simpleStateHandlers({name: '', email: '', password: ''}),
	withHandlers({
		_signUp		: ({ name, email, password, signUp }) => () => signUp(name, email, password),
		_toLogIn	: ({ displayAuth }) 			=> () => displayAuth(authScreenConst.LOG_IN),
	}),
	withProps(auth.pick(['operating']))
)(SignUp)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
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
	loadingAnim: {
		alignSelf: 'center',
		margin: '30'
	}
})