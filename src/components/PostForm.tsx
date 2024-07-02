import Colors from '@/assets/Colors/Colors'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { observer } from 'mobx-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	TextInput,
	View,
} from 'react-native'
import PostStore from '../stores/PostStore'
import UserStore from '../stores/UserStore'
import { Post } from '../types'
import Button from './Button'
import IconButton from './IconButton'
import ThumbnailWithInfo from './ThumbnailWithInfo'

export default observer(function PostForm(props: { post?: Post }) {
	let user
	if (props?.post?.user) {
		user = props.post.user
	} else {
		user = UserStore.user
	}
	const navigation = useNavigation()
	const [image, setImage] = useState(
		props?.post?.data?.image ? props.post.data.image : null
	)
	const { handleSubmit, control } = useForm({
		defaultValues: {
			Text: props?.post?.data?.text ? props.post.data.text : '',
		},
	})

	const onSubmit = (data: { Text: string }) => {
		if (!user) return
		let payload: Post = {
			user: user,
			data: {
				timestamp: new Date().toISOString(),
				text: data.Text,
				image: image,
			},
			id: props?.post?.id ? props.post.id : Math.floor(Math.random() * 1000),
		}
		props?.post?.id ? PostStore.editPost(payload) : PostStore.addPost(payload)
		navigation.goBack()
	}

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			setImage(result.assets[0].uri)
		}
	}
	const removeImage = () => {
		setImage(null)
	}

	return (
		<>
			<ScrollView
				{...props}
				style={{ flex: 1 }}
				contentContainerStyle={{ padding: 15, gap: 10 }}
				keyboardShouldPersistTaps="handled"
			>
				{user && <ThumbnailWithInfo user={user} />}
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							placeholder="Post Content"
							onChangeText={onChange}
							value={value}
							style={styles.textInput}
							multiline
							cursorColor={Colors.accent}
							selectionColor={Colors.accent}
						/>
					)}
					name="Text"
				/>
				{!image ? (
					<IconButton
						style={styles.imageImportButton}
						onPress={pickImage}
						name="image-plus"
						size={24}
						color={Colors.white}
					></IconButton>
				) : (
					<View style={styles.container}>
						<Image source={{ uri: image }} style={styles.image} />
						<IconButton
							name="image-remove"
							size={12}
							color="black"
							onPress={removeImage}
							style={styles.removeImage}
						/>
					</View>
				)}
			</ScrollView>
			<View style={{ paddingHorizontal: 15, paddingVertical: 3 }}>
				<Button name="Submit" onPress={handleSubmit(onSubmit)} />
			</View>
		</>
	)
})

const styles = StyleSheet.create({
	textInput: {
		backgroundColor: Colors.white,
		borderRadius: 10,
		height: Dimensions.get('window').height * 0.5,
		textAlignVertical: 'top',
		fontSize: 18,
		padding: 10,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		resizeMode: 'cover',
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageImportButton: {
		backgroundColor: '#90A4AE',
		height: 200,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	removeImage: {
		position: 'absolute',
		top: 5,
		right: 5,
		backgroundColor: Colors.white,
		borderRadius: 99,
		padding: 5,
	},
})
