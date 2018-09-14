import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { main } from '../../helpers/state'

const DetailScreen = ({ recruiter }) => 
	<View style={styles.container}>
		<Text style={styles.name}>{recruiter.recruiter_name}</Text>
		<Text style={styles.notes}>"{recruiter.notes}"</Text>

		<Text style={styles.title}>{recruiter.job_titles}</Text>
		<Text style={styles.summary}>{recruiter.jd_summary}</Text>
		<View style={styles.skills}>
			{ recruiter.job_skills.map((skill, index) => 
				<Text style={styles.skill} key={skill}>{skill}</Text>
			)}
		</View>
		
		<View style={styles.tagContainer}>
			<Text style={styles.tag}>Location</Text>
			<Text style={styles.value}>: {recruiter.location}</Text>
		</View>

		<View style={styles.tagContainer}>		
			<Text style={styles.tag}>Email</Text>
			<Text style={styles.value}>: {recruiter.email}</Text>
		</View>
		
		<View style={styles.tagContainer}>
			<Text style={styles.tag}>Phone: </Text>
			<Text style={styles.value}>: {recruiter.phone}</Text>
		</View>		
	</View>

export default compose(
	connect(main.self, null),
	withProps(main.pick(['recruiter']))
)(DetailScreen)

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	name: {
		fontSize: 18,
		color: '#444444',
		fontWeight: 'bold',
		margin: 10,
	},
	notes: {
		fontSize: 14,
		color: '#888888',
		fontStyle: 'italic',
		marginBottom: 18,
		textAlign: 'center'
	},
	title: {
		fontSize: 16,
		color: '#444444',
		fontWeight: 'bold',
		margin: 10,
	},
	summary: {
		fontSize: 14,
		color: '#888888',
		marginBottom: 15,
		textAlign: 'center'
	},
	skills: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		marginBottom: 18,
	},
	skill: {
		backgroundColor: '#eeeeee',
		padding: 3,
		paddingHorizontal: 5,
		borderRadius: 3,
		marginRight: 6,
	},
	tagContainer: {
		display: 'flex',
		flexDirection: 'row',
		padding: 4,
		paddingLeft: 16
	},
	tag: {
		flex: 1,
		fontWeight: 'bold',
		color: '#777777'
	},
	value: {
		flex: 3,
		color: '#aaaaaa'
	}
})