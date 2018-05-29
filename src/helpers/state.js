import { compose, isEmpty, isNil, objOf, path, pathEq, pick } from 'ramda'
import { fetchStatusConst, authStatusConst } from '../constants'

const log = title => x => {
	console.log(title, ' :', x)
	return x
}

/* AUTH */

export const authInObj = pick(['auth'])

const getScreen = path(['auth', 'screen'])
export const screenInObj = compose(objOf('screen'), getScreen)

const authStatusPathEq = pathEq(['auth', 'authStatus'])
export const isInitializing = authStatusPathEq(authStatusConst.INITIALIZING)

export const isNotAuthError = compose(isNil, path(['auth', 'error']))

export const getOperating = path(['auth', 'operating'])
export const operatingInObj = compose(objOf('operating'), getOperating)

/* MAIN */

export const mainInObj = pick(['main'])

const fetchStatusPathEq = pathEq(['main', 'fetchStatus'])
export const isFetchStatusNone = fetchStatusPathEq(fetchStatusConst.NONE)
export const isFetchStatusFetching = fetchStatusPathEq(fetchStatusConst.FETCHING)
export const isFetchStatusFetched = fetchStatusPathEq(fetchStatusConst.FETCHED)
export const isFetchStatusError = fetchStatusPathEq(fetchStatusConst.ERROR)
