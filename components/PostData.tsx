import Colors from '@/assets/Colors/Colors'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function PostData(props) {
	return (
		<View style={{ padding: 5 }}>
			{props.data.image && (
				<Image
					style={styles.image}
					source={{ uri: props.data.image }}
					resizeMode="cover"
				/>
			)}
			<Text>{props.data.text}</Text>
			<View style={styles.actionBar}>
				<TouchableOpacity onPress={() => props.handleEdit(props.id)}>
					<Feather name="edit" size={18} color={Colors.timestamp} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.handleDelete(props.id)}>
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
		alignItems: 'center',
		marginTop: 3,
	},
})
