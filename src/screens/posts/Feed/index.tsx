import Colors from '@/assets/Colors/Colors'
import Card from '@/src/components/Card'
import PostStore from '@/src/stores/PostStore'
import UserStore from '@/src/stores/UserStore'
import { MainParamsList, Post } from '@/src/types'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { NavigationProp } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import {
	Alert,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default observer(
	({ navigation }: { navigation: NavigationProp<MainParamsList> }) => {
		const posts = PostStore.posts
		useEffect(() => {
			if (PostStore.posts.length === 0) PostStore.getPosts()
		}, [])
		useEffect(() => {
			navigation.setOptions({
				headerRight: () => (
					<TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
						<FontAwesome name="user-circle" size={24} color={Colors.accent} />
					</TouchableOpacity>
				),
			})
		}, [navigation])
		const renderPost = (post: Post) => {
			return <Card post={post}></Card>
		}

		const handdleAddPost = () => {
			let user = UserStore.user
			if (!user) {
				Alert.alert('Error', 'Looks like you have not setup your profile', [
					{ text: 'Cancel', style: 'destructive' },
					{
						text: 'Setup Profile',
						onPress: () => {
							navigation.navigate('UserScreen')
						},
					},
				])
				return null
			}
			navigation.navigate('CreatePost')
		}

		return (
			<GestureHandlerRootView style={{ flex: 1 }}>
				<View
					style={{
						flex: 1,
						backgroundColor: Colors.background,
					}}
				>
					<FlatList
						style={styles.feedlist}
						data={posts.slice()}
						renderItem={({ item }) => renderPost(item)}
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
					></FlatList>
				</View>
				<View style={styles.addButtonContainer}>
					<TouchableOpacity style={styles.addButton} onPress={handdleAddPost}>
						<FontAwesome5 name="plus" size={30} color={Colors.white} />
					</TouchableOpacity>
				</View>
			</GestureHandlerRootView>
		)
	}
)

const styles = StyleSheet.create({
	feedlist: {
		padding: 6,
		marginBottom: 6
	},
	addButton: {
		backgroundColor: Colors.accent,
		borderRadius: 50,
		width: 65,
		height: 65,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButtonContainer: { position: 'absolute', bottom: 10, right: 10 },
})
