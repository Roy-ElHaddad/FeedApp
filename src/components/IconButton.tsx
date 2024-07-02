import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
    TouchableOpacity,
    ViewStyle,
} from 'react-native'

export default function IconButton({
	name,
	size,
	color,
	onPress,
	style,
}: {
	name: string
	size: number
	color: string
	onPress: Function
	style?: ViewStyle
}) {
	const handleOnPress = () => {
		onPress()
	}
	return (
		<TouchableOpacity style={[style]} onPress={handleOnPress}>
			<MaterialCommunityIcons name={name} size={size} color={color} />
		</TouchableOpacity>
	)
}
