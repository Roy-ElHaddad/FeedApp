import Colors from '@/assets/Colors/Colors'
import moment from 'moment'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ThumbnailWithInfo(props) {
	return (
		<View style={styles.container}>
			<Image style={styles.userIcon} source={{ uri: props.user.avatar }} />
			<View>
				<View style={{ flexDirection: 'row', paddingLeft: 5 }}>
					<Text
						style={styles.userName}
					>{`${props.user.name} ${props.user.lastName}`}</Text>
				</View>
				{props.timestamp ? (
					<Text style={styles.timestamp}>
						{moment(props.timestamp).fromNow()}
					</Text>
				) : null}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		width: '50%',
		alignItems: 'center',
		paddingVertical: '1%',
	},
	userName: {
		color: Colors.text,
		fontSize: 14,
		fontWeight: 'bold',
	},
	userIcon: {
		width: 35,
		height: 35,
		borderRadius: 25,
		borderColor: Colors.border,
		borderWidth: 2,
	},
	timestamp: {
		color: Colors.timestamp,
		fontSize: 11,
		marginTop: 4,
		marginLeft: 5,
	},
})
