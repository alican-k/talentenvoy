import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import IconRight from 'react-native-vector-icons/Entypo'
import { displayRecruiter } from '../../actions'
	
const Reqruiter = ({ recruiter, onPress }) =>
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<View style={styles.left}>
			<View style={styles.top}>
				<Text style={styles.title}>{recruiter.job_titles}</Text>
				<Text style={styles.location}>{recruiter.location}</Text>
			</View>
			<View style={styles.bottom}>
				{ recruiter.job_skills.map((skill, index) => 
					<Text style={styles.skill} key={skill}>{skill}</Text>
				)}
			</View>
		</View>
		<View style={styles.right}>
			<IconRight name='chevron-small-right' size={22} color={'#aaaaaa'} />
		</View>
	</TouchableOpacity>
	
export default compose(
	connect(null, { displayRecruiter }),
	withHandlers({
		onPress: ({ displayRecruiter, recruiter }) => () => displayRecruiter(recruiter.id)
	})
)(Reqruiter)
	
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch',
		backgroundColor: 'white',
		marginBottom: 1,
		padding: 8
	},
	left: {
		flex: 1,
		padding: 10
	},

	top: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom : 12,
	},
	title: {
		flex: 2,
		fontSize: 18,
		color: '#444444',
		fontWeight: 'bold',
	},
	location: {
		flex: 1,
		fontSize: 16,
		color: '#999999',
	},

	bottom: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	skill: {
		backgroundColor: '#eeeeee',
		padding: 3,
		paddingHorizontal: 5,
		borderRadius: 3,
		marginRight: 6,
		marginBottom: 6
	},

	right: {
		paddingHorizontal: 8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
})