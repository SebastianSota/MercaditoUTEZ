import { Overlay } from "@rneui/themed";
import { StyleSheet } from "react-native";
import Animation from "./animation";



Loading = () => {
    return (
        <Overlay overlayStyle={styles.container}>
            <Animation/>
        </Overlay>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '20%',
        height: '20%'
    },
    
});

export default Loading;