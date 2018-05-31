import 'rxjs'
import { Observable } from 'rxjs/Observable'
import * as actionTypes from '../actions/types'
import { routeReset, userDataLoaded, quoteFulfilled, quoteError } from '../actions'
import { loadUserData, randomQuote } from '../helpers/requests'
import fir from 'react-native-firebase'

const { of, concat, fromPromise } = Observable

export const loggedInEpic = action$ => action$.ofType(actionTypes.LOGGED_IN)
	.switchMap(action => concat(
		of(routeReset('Home')),
		fromPromise(loadUserData())
			.map(userDataLoaded)
	))


export const quoteRequestEpic = action$ => action$.ofType(actionTypes.QUOTE_REQUEST)
	.switchMap(action => 
		fromPromise(randomQuote())
			.map(quoteFulfilled)
			.catch(err => of(quoteError(err)))
	)