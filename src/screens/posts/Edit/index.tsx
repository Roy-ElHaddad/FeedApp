import PostForm from '@/src/components/PostForm'
import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'

export default function EditPost() {
	const { post } = useRoute().params ?? {}
	return (<View style={{flex:1}}>
        <PostForm post={post} />
    </View>)
}
