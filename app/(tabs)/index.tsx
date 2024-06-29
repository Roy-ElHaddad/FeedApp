import Colors from '@/assets/Colors/Colors'
import Card from '@/components/Card'
import data from '@/data/Posts.json'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

type Post = {
	name: string
	lastName: string
	avatar: string
	text: string
	key: number
}

export default function App() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		setPosts(data)
	}, [])

	const handleEdit = (id) => {
		alert(`Edit ${id}`)
	}
	const handleDelete = (id) => {
		const updatedPosts = posts.filter((post) => post.id !== id)
		setPosts(updatedPosts)
	}

	renderPost = (post) => {
		return (
			<Card
				post={post}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			></Card>
		)
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
					data={posts}
					renderItem={({ item }) => this.renderPost(item)}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
				></FlatList>
			</View>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	feedlist: {
		padding: 16,
	},
})
