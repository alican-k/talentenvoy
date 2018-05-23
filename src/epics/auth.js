import 'rxjs'
import { Observable } from 'rxjs/Observable'
import * as actionTypes from '../actions/types'
import { authStateChanged } from '../actions'
import { signInAnonymously } from '../helpers/requests'

const { empty, of, concat, fromPromise } = Observable

export const startupAuthEpic = action$ => action$.ofType(actionTypes.STARTUP)
	.switchMapTo(signInAnonymously().catch(err => {
			console.log('error while signing in anonymously: ', err)
			return empty()
		}))
	.map(authStateChanged)