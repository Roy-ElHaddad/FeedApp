import Colors from '@/assets/Colors/Colors'
import Create from '@/src/screens/posts/Create'
import Edit from '@/src/screens/posts/Edit'
import Feed from '@/src/screens/posts/Feed'
import User from '@/src/screens/user/Create'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
const TabNavigator = createBottomTabNavigator()

const MainNavigator = createNativeStackNavigator()

const MainNavigationStack = () => {
	return (
		<MainNavigator.Navigator>
			<MainNavigator.Screen
				name="FeedScreen"
				component={Feed}
				options={{
					title: 'Feed',
					headerStyle: styles.header,
				}}
			/>
			<MainNavigator.Screen name="EditScreen" component={Edit} />
			<MainNavigator.Screen name="CreatePost" component={Create} />
			<TabNavigator.Screen name="UserScreen" component={User} />
		</MainNavigator.Navigator>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	header: {
		backgroundColor: Colors.white,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 15,
		shadowOpacity: 0.2,
	},
})

export default MainNavigationStack
