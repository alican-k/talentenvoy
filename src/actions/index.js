import * as types from './types'

const ac = (type, payload) => ({type, payload})

/* * * * * A C T I O N S * * * * * */

export const quoteRequest = () 					=> ac(types.QUOTE_REQUEST)

export const quoteFulfilled = (response) 		=> ac(types.QUOTE_FULFILLED, { response })

