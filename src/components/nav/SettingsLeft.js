import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import IconSettings from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { routeReset } from '../../actions'
	
const HomeLeft = ({toHome}) =>
	<TouchableOpacity style={styles.container} onPress={toHome}>
		<IconSettings name='home' size={22} color='#333' />
	</TouchableOpacity>
	
export default compose(
	connect(null, { routeReset }),
	withHandlers({
		toHome: ({ routeReset }) => () => routeReset('Home')
	})
)(HomeLeft)
	
const styles = StyleSheet.create({
	container: {
		padding: 8
	}
})