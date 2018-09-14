import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import IconSettings from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { routeReset } from '../../actions'
	
const HomeLeft = ({ toSettings }) =>
	<TouchableOpacity style={styles.container} onPress={toSettings}>
		<IconSettings name='settings-outline' size={22} color='#333' />
	</TouchableOpacity>
	
export default compose(
	connect(null, { routeReset }),
	withHandlers({
		toSettings: ({ routeReset }) => () => routeReset('Settings')
	})
)(HomeLeft)
	
const styles = StyleSheet.create({
	container: {
		padding: 8
	}
})