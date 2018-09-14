import { 
	__, always, assocPath,
	compose, converge, assoc, concat, join, juxt, head, identity, is, map, mapObjIndexed, merge,
	path, reduce, tail, toUpper, values, unapply
} from 'ramda'
import { withStateHandlers } from 'recompose'

const paramsToArray = unapply(identity)
const defaultToFunction = i => is(Number, i) || is(String, i) ? always(i) : i

const flexPicker = arr => converge(paramsToArray, map(defaultToFunction, arr))
export const flexPath = arr => converge(path, [flexPicker(arr), identity])
export const flexAssoc = arr => val => converge(assocPath(__, val), [flexPicker(arr), identity])


export const simpleStateHandlers = (initials) => {
	const setCapitalize = compose(concat('set'), join(''), juxt([compose(toUpper, head), tail]))
	const setHandlers = (value, key) => assoc(value, props => val => assoc(key, val, {}), {})
	
	const ret = compose(
		reduce(merge,{}),
		values,
		mapObjIndexed(setHandlers),
		mapObjIndexed((value, key) => setCapitalize(key))
	)(initials)

	return withStateHandlers(initials, ret)
}