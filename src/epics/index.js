import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { startup } from '../actions'
import { startupAuthEpic } from './auth'
import { navigateEpic, resetEpic, backEpic } from './navigation'
import { quoteRequestEpic } from './main'

const startupEpic = action$ => Observable.of(startup()).delay(500)

export default combineEpics(
	startupEpic,
	startupAuthEpic,
	navigateEpic, resetEpic, backEpic,
	quoteRequestEpic
)