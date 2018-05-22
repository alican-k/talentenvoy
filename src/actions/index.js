import * as types from './types'

const ac = (type, payload) => ({type, payload})

/* * * * * A C T I O N S * * * * * */

export const routeNavigate = (routeName, params = {}) 	=> ac(types.ROUTE_NAVIGATE,{routeName, params})
export const routeReset = (routeName, params = {}) 		=> ac(types.ROUTE_RESET, {routeName, params})
export const routeBack = (routeName) 					=> ac(types.ROUTE_BACK, {routeName})

export const quoteRequest = () 					=> ac(types.QUOTE_REQUEST)
export const quoteFulfilled = (response) 		=> ac(types.QUOTE_FULFILLED, { response })
export const quoteError = (err)					=> ac(types.QUOTE_ERROR, { err })

