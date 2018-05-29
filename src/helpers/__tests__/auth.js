import { objOf } from 'ramda'
import reducer from '../../reducers/auth'
import * as actionTypes from '../../actions/types'
import {  } from '../../actions'
import { isInitializing, screenInObj } from '../state'

const objOfAuth = objOf('auth')
let state = objOfAuth(reducer(undefined, {}))

describe('authStatus helpers:', () => {
	it('isInitializing should return true at initial state', () => {
		expect(isInitializing(state)).toEqual(true)
	})
	it('screenInObj should return {screen: "LOG_IN"} at initial state', () => {
		expect(screenInObj(state)).toEqual({screen: 'LOG_IN'})
	})

	// it('should return true after fetch request', () => {
	// 	state = objOfMain(reducer(state, quoteRequest()))
	// 	expect(isFetchStatusFetching(state)).toEqual(true)		
	// })
})