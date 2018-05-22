import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Root from './components/Root'

const Index = () =>
	<Provider store={store}>
		<Root />
	</Provider>

export default Index