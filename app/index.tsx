import Colors from '@/assets/Colors/Colors'
import Card from '@/components/Card'
import data from '@/data/Posts.json'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
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
		// alert(`Delete ${id}`)
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
				<View style={styles.header}>
					<Text style={styles.title}>Feed</Text>
				</View>
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
	header: {
		width: '100%',
		paddingTop: 32,
		paddingBottom: 16,
		backgroundColor: Colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBlockColor: Colors.border,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 15,
		shadowOpacity: 0.2,
		zIndex: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	feedlist: {
		padding: 16,
	},
})
