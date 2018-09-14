import * as actionTypes from '../actions/types'
import { fetchStatusConst } from '../constants'
import { __, always, concat, descend, evolve, prop, sort } from 'ramda'

const initialState = {
	me					: null,
	token				: null,
	recruiters			: [],
	displayingId		: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_DATA_LOADED: {
			const { name } = action.payload
			return {...state, me: { name }}
		}

		case actionTypes.TOKEN_RECEIVED: {
			const { token } = action.payload
			return {...state, token}
		}

		case actionTypes.RECRUITERS_ADDED: {
			const { recruiters } = action.payload 	//sort(descend(prop('id')), action.payload.recruiters)
			return evolve(__, state)({
				recruiters: concat(recruiters)
			})
		}

		case actionTypes.DISPLAY_RECRUITER: {
			const displayingId = action.payload.id
			return {...state, displayingId}
		}

		case actionTypes.LOG_OUT: {
			return {...state, me: null}
		}

		default:
			return state
	}
}

export default reducer
