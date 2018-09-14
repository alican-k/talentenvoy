import { call, compose, converge, equals, isEmpty, isNil, find, objOf, path, pathEq, pick, prop, propEq } from 'ramda'
import { fetchStatusConst, authStatusConst } from '../constants'
import createAltState from 'redux-state-getter'
import { flexPath } from './utils'

const log = title => x => {
	console.log(title, ' :', x)
	return x
}

/* AUTH */

const screen 			= prop('screen')
const authStatus		= prop('authStatus')
const initializing		= compose(equals(authStatusConst.INITIALIZING), authStatus)
const error				= prop('error')
const isNotAuthError 	= compose(isNil, error)
const operating			= prop('operating')

export const auth		= createAltState('auth', {screen, authStatus, initializing, error, isNotAuthError, operating})


/* MAIN */

const findById 			= (id, recruiters) => find(propEq('id', id))(recruiters)

const me				= prop('me')
const recruiters		= prop('recruiters')
const displayingId		= prop('displayingId')
const recruiter			= converge(findById, [displayingId, recruiters])

export const main		= createAltState('main', { me, recruiters, recruiter })




//const findById 			= compose(find, propEq('id'), displayingId)
// const recruiter			= converge(call, [findById, recruiters])