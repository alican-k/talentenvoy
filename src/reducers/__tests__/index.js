import * as actionTypes from '../../actions/types'
import reducer from '../main'
import { initialState, quotePayload } from '../../dump'

describe('main reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {}))
			.toEqual(initialState)
	})

	it('should handle ' + actionTypes.QUOTE_REQUEST + ' action', () => {
		expect(reducer(initialState, {type: actionTypes.QUOTE_REQUEST}))
			.toEqual({
				fetchStatus: 'FETCHING',
				quote: '',
				author: ''
			})
	})

	it('should handle ' + actionTypes.QUOTE_FULFILLED + ' action', () => {
		expect(reducer(initialState, {type: actionTypes.QUOTE_FULFILLED, payload: quotePayload})) 
			.toEqual({
				fetchStatus: 'FETCHED',
				quote: 'quote of that author',
				author: 'an author'
			})
	})
  })
  