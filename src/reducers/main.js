import { inc } from 'ramda'

const initialState = {
	fetchStatus: 'NONE',					// FETCHING, FETCHED
	quote: '',
	author: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'QUOTE_REQUEST': {
			return {...state, fetchStatus: 'FETCHING'}
		}
		
		case 'QUOTE_FULFILLED': {
			const { quote, author } = action.payload.response
			return {...state, quote, author, fetchStatus: 'FETCHED'}
		}

		default:
			return state
	}
}

export default reducer
