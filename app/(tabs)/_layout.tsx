import Colors from '@/assets/Colors/Colors'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function TabsLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: 'Feed',
					headerTitleStyle: styles.title,
					title: 'Feed',
					headerStyle: styles.header,
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="post-outline"
							size={24}
							color="black"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="posts/new"
				options={{
					headerTitle: 'New Post',
					headerTitleStyle: styles.title,
					title: 'Post',
					headerStyle: styles.header,
					tabBarIcon: () => (
						<MaterialIcons name="post-add" size={24} color="black" />
					),
				}}
			/>
		</Tabs>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	header: {
		backgroundColor: Colors.white,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 15,
		shadowOpacity: 0.2,
	},
})
