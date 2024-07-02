import UserForm from '@/src/components/UserForm'
import { observer } from 'mobx-react'
import { View } from 'react-native'

export default observer(function CreateUser() {
	return (
		<View style={{ flex: 1 }}>
			<UserForm />
		</View>
	)
})
