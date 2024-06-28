import { StyleSheet, Text, View } from 'react-native'
import Colors from '../assets/Colors/Colors.js'
import PostData from './PostData'
import UserInfo from './UserInfo'

// type Post = {
// 	name: string
// 	lastName: string
// 	avatar: string
// 	text: string
// 	key: number
// }

export default function Card(props) {
	return (
		<View style={styles.container}>
			<UserInfo user={props.post.user}></UserInfo>
			<PostData
				data={props.post.data}
				id={props.post.id}
				handleEdit={props.handleEdit}
				handleDelete={props.handleDelete}
			></PostData>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		borderRadius: 10,
		flexDirection: 'column',
		padding: '2%',
		margin: 5,
	},
	content_text: {
		color: 'black',
		fontSize: 14,
		fontWeight: 'bold',
	},
})
