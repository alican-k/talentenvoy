import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { navigateEpic, resetEpic, backEpic } from './navigation'
import { quoteRequestEpic } from './main'

export default combineEpics(
	navigateEpic, resetEpic, backEpic,
	quoteRequestEpic
)