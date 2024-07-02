import Colors from "@/assets/Colors/Colors";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export default function Button({name,onPress,style}: {name: string, onPress: Function, style?: ViewStyle}){
    const handleOnPress = ()=> { onPress()}
    return(
        <View>
            <TouchableOpacity style={[styles.button,style]} onPress={handleOnPress}>
                <Text style={styles.label}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.accent,
        paddingVertical: 10

    },
    label:{
        color: Colors.white,
        fontSize: 16,
        fontWeight: "500",
    }
})