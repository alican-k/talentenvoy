import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { quoteFulfilled } from '../actions'
import { randomQuote } from '../helpers/requests'

const { of, concat } = Observable

export const quoteRequestEpic = action$ => action$.ofType('QUOTE_REQUEST')
	.switchMap(() => randomQuote())
	.map(quoteFulfilled)
