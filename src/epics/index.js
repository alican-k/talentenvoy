import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { quoteRequestEpic } from './main'

export default combineEpics(
	quoteRequestEpic
)