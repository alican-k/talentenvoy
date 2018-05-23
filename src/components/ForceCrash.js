import React from 'react'
import { Button } from 'react-native'
import { compose, withHandlers } from 'recompose';
import firebase from 'react-native-firebase'

const ForceCrash = ({ forceCrash }) => 
	<Button title='Force a Crash' onPress={forceCrash} />

export default compose(
	withHandlers({
		forceCrash: () => () => {
			// these parts can be moved to EPICS
			firebase.crashlytics().crash()
			firebase.crashlytics().log('recorded error with crashlytics.log()')			
			throw new Error('Crash forced')
		}
	})
)(ForceCrash)