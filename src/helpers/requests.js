import 'rxjs'
import { Observable } from 'rxjs/Observable'
import firebase from 'react-native-firebase'
import { assoc } from 'ramda'

/* FIREBASE */

const db = firebase.firestore()
const auth = firebase.auth()
export const getUid = () => firebase.auth().currentUser.uid

export const authState$ = () => Observable.create(observer => {
	firebase.auth().onAuthStateChanged(user => {
		if(user) {
			if(user.isAnonymous)
				observer.next(null)
			else {
				user.getIdToken(true)
					.then(token => observer.next(user))
					.catch(error => observer.next(null))
			}
		}
		else {
			observer.next(user)
		}
	})	
})

export const signUp = (email, password) => 
	auth.createUserWithEmailAndPassword(email, password)

export const createUserData = userData => 
	db.collection('Users').doc(getUid()).set(userData)

export const logIn = (email, password) => 
	auth.signInWithEmailAndPassword(email, password)

export const logOut = () => 	
	auth.signOut()

export const reset = (email) =>
	auth.sendPasswordResetEmail(email)

export const loadUserData = () =>
	db.collection('Users').doc(getUid()).get().then(documentCallback)

export const saveToken = (uid, token) =>
	db.collection('Notifications').doc('tokens').set(assoc(uid, token, {}))

export const recruiterChange$ = () => Observable.create(observer => {
	db.collection('Recruiters').onSnapshot(snapshot => {
		const arr = []
		snapshot.docChanges.forEach(change => {
			arr.push({
				id: change.doc.id,
				...change.doc.data()
			})
		})
		observer.next(arr)
	})
})

const documentCallback = doc => doc.data()
	
