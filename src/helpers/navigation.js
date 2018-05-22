import { NavigationActions } from 'react-navigation'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

let _navigation

export const setNavigation = navigation => { _navigation = navigation }

export const navigate = (routeName, params = {}) => {
	_navigation.dispatch(
		NavigationActions.navigate({
			type: 'Navigation/NAVIGATE',
			routeName,
			params,
		}),
	)
}

export const reset = (routeName, params = {}) => {
	_navigation.dispatch(
		NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					type: 'Navigation/NAVIGATE',
					routeName,
					params,
				}),
			],
		}),
	)
}
  
export const back = (routeName = null) => {
	const config = routeName ? {key: routeName} : {}
	_navigation.dispatch(
		NavigationActions.back(config),
	)
}