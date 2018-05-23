import 'rxjs'
import { Observable } from 'rxjs/Observable'
import firebase from 'react-native-firebase'

const url = 'https://talaikis.com/api/quotes/random/'

export const randomQuote = () => 
	fetch(url).then(res => res.json())


/* FIREBASE */

export const signInAnonymously = () => firebase.auth().signInAnonymously()