import * as actionTypes from '../actions/types'
import { fetchStatusConst } from '../constants'
import { inc } from 'ramda'

const initialState = {
	fetchStatus: fetchStatusConst.NONE,
	quote: '',
	author: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case actionTypes.QUOTE_REQUEST: {
			const fetchStatus = fetchStatusConst.FETCHING
			return {...state, fetchStatus}
		}
		
		case actionTypes.QUOTE_FULFILLED: {
			const { quote, author } = action.payload.response
			const fetchStatus = fetchStatusConst.FETCHED
			return {...state, quote, author, fetchStatus}
		}

		case actionTypes.QUOTE_ERROR: {
			const fetchStatus = fetchStatusConst.ERROR
			return {...state, fetchStatus}
		}

		default:
			return state
	}
}

export default reducer
