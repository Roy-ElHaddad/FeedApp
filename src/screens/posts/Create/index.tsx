import PostForm from '@/src/components/PostForm'
import UserStore from '@/src/stores/UserStore'
import { observer } from 'mobx-react'
import { View } from 'react-native'

export default observer(function NewPost() {
	let user = UserStore.user
	return (
		<View style={{ flex: 1 }}>
			<PostForm post={user} />
		</View>
	)
})
