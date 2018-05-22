import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Root from './components/Root'

const headerNull = { navigationOptions: { header: null }}

const Navigator = createStackNavigator({
	Home: {
		screen: Root,
		...headerNull
	},
})

export default Navigator