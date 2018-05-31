import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { mainInObj, meInObj } from '../../helpers/state'
	
const Name = ({ me }) => me
	? <Text style={styles.text}>Merhaba {me.name.toUpperCase()}</Text>
	: <ActivityIndicator style={styles.anim} />
	
export default compose(
	connect(mainInObj, null),
	withProps(meInObj)
)(Name)
	
const styles = StyleSheet.create({
	anim: {
		marginBottom: 40,		
	},
	text: {
		marginBottom: 40,
		fontSize: 18,
		color: '#444444',
		letterSpacing: 1
	}
})