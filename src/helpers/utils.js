import { 
	compose, assoc, concat, join, juxt, head, mapObjIndexed, merge,
	reduce, tail, toUpper, values 
} from 'ramda'
import { withStateHandlers } from 'recompose'


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