import Colors from '@/assets/Colors/Colors.js'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PostData from './PostData'
import ThumbnailWithInfo from './ThumbnailWithInfo'


export default function Card(props) {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<ThumbnailWithInfo
					user={props.post.user}
					timestamp={props.post.data.timestamp}
				/>
				<TouchableOpacity onPress={() => navigation.navigate('EditScreen',{post: props.post})}>
					<Feather name="edit" size={18} color={Colors.timestamp} />
				</TouchableOpacity>
			</View>
			<PostData
				post={props.post}
				handleEdit={props.handleEdit}
				handleDelete={props.handleDelete}
			/>
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
