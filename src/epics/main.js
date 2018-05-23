import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { quoteFulfilled, quoteError } from '../actions'
import { randomQuote } from '../helpers/requests'
import fir from 'react-native-firebase'

const { of, concat, fromPromise } = Observable

export const quoteRequestEpic = action$ => action$.ofType('QUOTE_REQUEST')
	.switchMap(action => 
		fromPromise(randomQuote())
		.map(quoteFulfilled)
		.catch(err => of(quoteError(err)))
	)