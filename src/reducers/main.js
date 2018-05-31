import * as actionTypes from '../actions/types'
import { fetchStatusConst } from '../constants'
import { inc } from 'ramda'

const initialState = {
	me: null,
	fetchStatus: fetchStatusConst.NONE,
	quote: '',
	author: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_DATA_LOADED: {
			const { name } = action.payload
			return {...state, me: { name }}
		}

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

		case actionTypes.LOG_OUT: {
			return {...state, me: null}
		}

		default:
			return state
	}
}

export default reducer
