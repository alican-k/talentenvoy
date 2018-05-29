import { objOf } from 'ramda'
import reducer from '../../reducers/main'
import * as actionTypes from '../../actions/types'
import { quoteRequest, quoteFulfilled, quoteError } from '../../actions'
import { isFetchStatusNone, isFetchStatusFetching, isFetchStatusFetched, isFetchStatusError } from '../state'

const objOfMain = objOf('main')
let state = objOfMain(reducer(undefined, {}))

describe('fetchStatus helpers:', () => {
	it('isFetchStatusNone should return true at initial state', () => {
		expect(isFetchStatusNone(state)).toEqual(true)
	})

	it('should return true after fetch request', () => {
		state = objOfMain(reducer(state, quoteRequest()))
		expect(isFetchStatusFetching(state)).toEqual(true)		
	})
})