import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Root from './components/Root'
import { setNavigation } from './helpers/navigation'
import Navigator from './Navigator'

const Index = () =>
	<Provider store={store}>
		<Navigator ref={ref => setNavigation(ref)} />
	</Provider>

export default Index