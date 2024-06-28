import Colors from "@/assets/Colors/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

export default function UserInfo(props) {
  return (
    <View style={styles.container} >
        <Image style={styles.userIcon} source={{uri: props.user.avatar}}/>
        <Text style={styles.userName}>{props.user.name}</Text>
        <Text style={styles.userName}>{props.user.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : "transparent",
        flexDirection : "row",
        width : "50%",
        alignItems : "center",
        paddingVertical: "2%"
    },
    userName: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5
    },
    userIcon: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderColor: Colors.border,
        borderWidth: 2,
    }
});