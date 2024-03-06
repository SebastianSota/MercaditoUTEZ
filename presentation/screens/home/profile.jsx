import { Image, Text } from "@rneui/themed";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from "@expo/vector-icons";

Profile = () => {
    const [image, setImage] = useState("https://lh3.googleusercontent.com/ogw/AF2bZyjqKK9Uw97sLKgYsqFcNyX-pf1xods-UiCakFQe");
    const [status, requestPermission] = ImagePicker.useCameraPermissions();


    const pickImage = async () => {
        /* let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            cameraType: ImagePicker.CameraType.back
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        } */
        /* let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            cameraType: ImagePicker.CameraType.back
        })

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        } */
    }

    return (
        <View style={styles.container}>
            <Image
                onPress={pickImage}
                style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'black', borderWidth: 1 }}
                source={{ uri: image }} />
            <Text style={{ marginTop: 20, fontSize: 20 }}>Sebastian Sota Garcia</Text>
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

export default Profile;