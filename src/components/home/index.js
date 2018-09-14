import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withProps, renderComponent } from 'recompose'
import { main } from '../../helpers/state'
import Recruiter from './Recruiter'

const renderItem = ({item}) => <Recruiter recruiter={item} />
const keyExtractor = item => item.id

const Recruiters = ({ recruiters }) =>
	<FlatList contentContainerStyle={styles.container}
		data={recruiters}
		keyExtractor={keyExtractor}
		renderItem={renderItem}
	/>
	
export default compose(
	connect(main.self, null),
	withProps(main.pick(['recruiters']))
)(Recruiters)
	
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'stretch'
	}
})