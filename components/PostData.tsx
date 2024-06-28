import Colors from '@/assets/Colors/Colors'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function PostData(props) {

    
	return (
		<View>
			<Text style={styles.timestamp}>
				{moment(props.data.timestamp).fromNow()}
			</Text>
			{props.data.image && (
				<Image
					style={styles.image}
					source={{ uri: props.data.image }}
					resizeMode="cover"
				/>
			)}
			<Text>{props.data.text}</Text>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: 5,
				}}
			>
				<TouchableOpacity onPress={() => props.handleEdit(props.id) }>
					<Feather name="edit" size={18} color={Colors.timestamp} />
				</TouchableOpacity>
                <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
				<MaterialCommunityIcons
					name="delete-forever-outline"
					size={20}
					color="red"
				/>
                </TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	timestamp: {
		color: Colors.timestamp,
		fontSize: 11,
		marginTop: 4,
	},
	text: {
		color: Colors.text,
		fontSize: 14,
	},
	image: {
		width: undefined,
		height: 150,
		borderRadius: 5,
		marginVertical: 16,
	},
})
