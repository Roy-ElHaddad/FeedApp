import Colors from '@/assets/Colors/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PostStore from '../stores/PostStore'

//TODO implement types 
export default function PostData({ post }) {
	const navigation = useNavigation()
	const handleDelete = (id) => {
		PostStore.deletePost(id)
	}
	return (
		<View style={{ padding: 5 }}>
			{post.data.image ? (
				<Image
					style={styles.image}
					source={{ uri: post.data.image }}
					resizeMode="cover"
				/>
			) : null}
			<View style={styles.actionBar}>
				<Text style={{ width: '90%' }}>{post.data.text}</Text>
				<TouchableOpacity onPress={() => handleDelete(post.id)}>
					<MaterialCommunityIcons
						name="delete-forever-outline"
						size={20}
						color={Colors.delete}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: Colors.text,
		fontSize: 14,
	},
	image: {
		width: undefined,
		height: 150,
		borderRadius: 5,
		marginVertical: 5,
	},
	actionBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		marginTop: 3,
	},
})
