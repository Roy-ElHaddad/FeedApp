import Colors from '@/assets/Colors/Colors'
import { User } from '@/src/types'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { observer } from 'mobx-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'
import UserStore from '../stores/UserStore'
import Button from './Button'
import IconButton from './IconButton'

export default observer(function UserForm() {
	const user = UserStore.user
	const navigation = useNavigation()
	const [image, setImage] = useState(user?.avatar ? user.avatar : null)
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user?.name ? user.name : '',
			lastName: user?.lastName ? user.lastName : '',
		},
	})

	const onSubmit = (data: { name: string; lastName: string }) => {
		if (image === null) {
			Alert.alert('Error', 'Please select an image', [{ text: 'OK' }])
			return
		}
		let payload: User = {
			name: data.name,
			lastName: data.lastName,
			avatar: image,
		}
		UserStore.editUser(payload)
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
				{...user}
				style={{ flex: 1 }}
				contentContainerStyle={{
					padding: 15,
					gap: 10,
					alignItems: 'center',
					justifyContent: 'center',
				}}
				keyboardShouldPersistTaps="handled"
			>
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
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							placeholder="First Name"
							onChangeText={onChange}
							value={value}
							style={styles.textInput}
							cursorColor={Colors.accent}
							selectionColor={Colors.accent}
						/>
					)}
					name="name"
				/>
				{errors.name && <Text> Name is required.</Text>}

				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							placeholder="Last Name"
							onChangeText={onChange}
							value={value}
							style={styles.textInput}
							cursorColor={Colors.accent}
							selectionColor={Colors.accent}
						/>
					)}
					name="lastName"
				/>
				{errors.lastName && <Text>Last Name required.</Text>}
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
		width: '100%',
		textAlignVertical: 'top',
		fontSize: 18,
		padding: 10,
	},
	image: {
		height: 80,
		width: 80,
		borderRadius: 50,
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
		height: 80,
		width: 80,
		borderRadius: 50,
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
