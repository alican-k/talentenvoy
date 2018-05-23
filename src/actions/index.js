import * as types from './types'

const ac = (type, payload) => ({type, payload})

/* * * * * A C T I O N S * * * * * */

export const startup 			= ()						=> ac(types.STARTUP)

export const authStateChanged 	= (user)					=> ac(types.AUTH_STATE_CHANGED, { user })
export const notLoggedIn 		= ()						=> ac(types.NOT_LOGGED_IN)
export const loggedIn 			= ()						=> ac(types.LOGGED_IN)
export const logIn 				= ()						=> ac(types.LOG_IN)
export const logingIn 			= ()						=> ac(types.LOGGING_IN)
export const logOut 			= ()						=> ac(types.LOG_OUT)
export const signUp 			= ()						=> ac(types.SIGN_UP)
export const sendResetEmail 	= ()						=> ac(types.SEND_RESET_EMAIL)
export const authError 			= ()						=> ac(types.AUTH_ERROR)
export const closeAuthError 	= ()						=> ac(types.CLOSE_AUTH_ERROR)

export const routeNavigate 	= (routeName, params = {}) 		=> ac(types.ROUTE_NAVIGATE,{routeName, params})
export const routeReset 	= (routeName, params = {}) 		=> ac(types.ROUTE_RESET, {routeName, params})
export const routeBack 		= (routeName) 					=> ac(types.ROUTE_BACK, {routeName})

export const quoteRequest 	= () 					=> ac(types.QUOTE_REQUEST)
export const quoteFulfilled = (response) 			=> ac(types.QUOTE_FULFILLED, { response })
export const quoteError 	= (err)					=> ac(types.QUOTE_ERROR, { err })

