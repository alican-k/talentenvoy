import * as types from './types'

const ac = (type, payload) => ({type, payload})

/* * * * * A C T I O N S * * * * * */

export const startup 			= ()						=> ac(types.STARTUP)

export const notLoggedIn 		= ()						=> ac(types.NOT_LOGGED_IN)
export const loggedIn 			= (uid)						=> ac(types.LOGGED_IN, { uid })
export const logIn 				= (email, password)			=> ac(types.LOG_IN, { email, password })
export const logOut 			= ()						=> ac(types.LOG_OUT)
export const signUp 			= (name, email, password)	=> ac(types.SIGN_UP, { name, email, password })
export const reset 				= (email)					=> ac(types.RESET, { email })
export const sent 	 			= ()						=> ac(types.SENT)
export const authError 			= (error)					=> ac(types.AUTH_ERROR, { error })
export const closeAuthError 	= ()						=> ac(types.CLOSE_AUTH_ERROR)
export const displayAuth	 	= (screen)					=> ac(types.DISPLAY_AUTH, { screen })

export const routeNavigate 	= (routeName, params = {}) 		=> ac(types.ROUTE_NAVIGATE,{routeName, params})
export const routeReset 	= (routeName, params = {}) 		=> ac(types.ROUTE_RESET, {routeName, params})
export const routeBack 		= (routeName) 					=> ac(types.ROUTE_BACK, {routeName})

export const userDataLoaded		= (data)					=> ac(types.USER_DATA_LOADED, { ...data })

export const notificationReceived 	= (notification)		=> ac(types.NOTIFICATION_RECEIVED, { notification })
export const tokenReceived 			= (token)				=> ac(types.TOKEN_RECEIVED, { token })

export const recruitersAdded		= (recruiters)			=> ac(types.RECRUITERS_ADDED, { recruiters})

export const displayRecruiter		= (id)					=> ac(types.DISPLAY_RECRUITER, { id })