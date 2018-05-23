import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './components/home'

const headerNull = { navigationOptions: { header: null }}

const Navigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
		...headerNull
	},
})

export default Navigator