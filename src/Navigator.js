import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AuthScreen from './components/auth'
import HomeScreen from './components/home'

const headerNull = { navigationOptions: { header: null }}

const Navigator = createStackNavigator({
	Auth: {
		screen: AuthScreen,
		...headerNull
	},
	Home: {
		screen: HomeScreen,
		...headerNull
	},
})

export default Navigator