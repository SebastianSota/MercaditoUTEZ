import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

Chat = () => {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Chat;