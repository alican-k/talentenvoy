import { compose, objOf, pathEq, pick } from 'ramda'
import { fetchStatusConst } from '../constants'

export const mainInObj = pick(['main'])

const fetchStatusPathEq = pathEq(['main', 'fetchStatus'])
export const isFetchStatusNone = fetchStatusPathEq(fetchStatusConst.NONE)
export const isFetchStatusFetching = fetchStatusPathEq(fetchStatusConst.FETCHING)
export const isFetchStatusFetched = fetchStatusPathEq(fetchStatusConst.FETCHED)
export const isFetchStatusError = fetchStatusPathEq(fetchStatusConst.ERROR)
