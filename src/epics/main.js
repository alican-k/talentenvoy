import 'rxjs'
import { Observable } from 'rxjs/Observable'
import * as actionTypes from '../actions/types'
import { routeReset, routeNavigate, userDataLoaded, recruitersAdded } from '../actions'
import { loadUserData, recruiterChange$ } from '../helpers/requests'
import fir from 'react-native-firebase'

const { of, concat, fromPromise } = Observable

export const loggedInEpic = action$ => action$.ofType(actionTypes.LOGGED_IN)
	.switchMap(action => concat(
		of(routeReset('Home')),
		fromPromise(loadUserData())
			.map(userDataLoaded),
		recruiterChange$()
			.do(recruiterDoc => console.log(recruiterDoc))
			.map(recruitersAdded)
	))

export const displayRecruiterEpic = action$ => action$.ofType(actionTypes.DISPLAY_RECRUITER)
	.mapTo(routeNavigate('Detail'))