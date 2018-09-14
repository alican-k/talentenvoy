import firebase from 'react-native-firebase'
import { Observable } from 'rxjs/Observable'

const messaging = firebase.messaging()

export const notificationReceived$ = () => Observable.create(observer => {
	firebase.notifications().onNotification(notification => {
		console.log('notification: ', notification)	
		observer.next(notification)
	})
})

export const tokenReceived$ = () => Observable.create(observer => {
	messaging.getToken().then(token => {
		observer.next(token)
		console.log('token: ', token)
	})
})
















/*
firebase.messaging().onMessage(message => {
	console.log('message: ', message)
})

firebase.notifications().onNotificationDisplayed(notification => {
	// Process your notification as required
	// ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually 
	// if you'd like to re-display the notification.
	console.log('notification displayed: ', notification)
})

firebase.notifications().onNotification(notification => {
	// Process your notification as required
	console.log('notification: ', notification)	
})
*/