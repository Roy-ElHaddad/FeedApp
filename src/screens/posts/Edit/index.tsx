import PostForm from '@/src/components/PostForm'
import { MainParamsList, Post } from '@/src/types'
import { RouteProp, useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { View } from 'react-native'

export default observer(function EditPost() {
	const { post }: { post: Post | undefined } = useRoute<
		RouteProp<MainParamsList>
	>().params as { post: Post | undefined }
	return (
		<View style={{ flex: 1 }}>
			<PostForm post={post} />
		</View>
	)
})
