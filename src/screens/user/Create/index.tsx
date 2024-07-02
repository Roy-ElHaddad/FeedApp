import UserForm from '@/src/components/UserForm'
import { useRoute } from '@react-navigation/native'
import { View } from 'react-native'

export default function CreateUser() {
	const { user } = useRoute().params ?? {}
	return (<View style={{flex:1}}>
        <UserForm post={user} />
    </View>)
}
