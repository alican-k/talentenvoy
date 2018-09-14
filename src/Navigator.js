import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AuthScreen from './components/auth'
import HomeScreen from './components/home'
import HomeLeft from './components/nav/HomeLeft'
import SettingsScreen from './components/settings'
import SettingsLeft from './components/nav/SettingsLeft'
import DetailScreen from './components/detail'

const headerNull = { navigationOptions: { header: null }}

const Navigator = createStackNavigator({
	Auth: {
		screen: AuthScreen,
		...headerNull
	},
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Reqruiters',
			headerLeft: HomeLeft
		}
	},
	Settings: {
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings',
			headerLeft: SettingsLeft
		}
	},
	Detail: {
		screen: DetailScreen,
	}
})

export default Navigator