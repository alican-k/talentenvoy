import 'rxjs'
import { Observable } from 'rxjs/Observable'
import * as actionTypes from '../actions/types'
import { notificationReceived, tokenReceived } from '../actions'
import { notificationReceived$, tokenReceived$ } from '../helpers/notification'
import { saveToken } from '../helpers/requests'

const { merge } = Observable

export const notificationsEpic = action$ => action$.ofType(actionTypes.LOGGED_IN)
	.switchMapTo(
		merge(
			notificationReceived$().map(notificationReceived),
			tokenReceived$().map(tokenReceived)
		)
	)

export const saveTokenEpic = (action$, store) => action$.ofType(actionTypes.TOKEN_RECEIVED)
	.switchMap(action => {
		const { uid } = store.getState().auth
		const { token } = store.getState().main
		return saveToken(uid, token)
	})
	.ignoreElements()

	