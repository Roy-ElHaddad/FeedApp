import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { Post } from './classes'
export type MainParamsList = {
	Feed?: {}
	EditScreen?: {
		post: Post
	}
	CreatePost?: {}
	UserScreen?: {}
}

export type MainStackScreenProps<T extends keyof MainParamsList> =
	NativeStackScreenProps<MainParamsList, T>
