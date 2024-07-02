import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
export type MainParamsList = {
	Feed?: {}
	EditScreen?: {}
	CreatePost?: {}
	UserScreen?: {}
}

export type MainStackScreenProps<T extends keyof MainParamsList> =
	NativeStackScreenProps<MainParamsList, T>
