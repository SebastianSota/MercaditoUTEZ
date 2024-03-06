import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            const response = await verifyUserLoged();
            if(response != null){
                navigation.replace('BottomTab');
            }else{
                navigation.replace('BottomTab');
            }
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [navigation]);

    const verifyUserLoged = async () => {
        let logedUser;
        try {
            logedUser = await AsyncStorage.getItem('logedUser'); 
        } catch (e) {
            console.log("Something gone wrong!!!");
        }
        return logedUser != null ? JSON.parse(logedUser) : null;
    };

    return (
        <View style={style.container}>
            <Image style={style.imageLogo}
                source={require('../../assets/images/logoutez.png')} />

            <LottieView
                source={require('../../assets/animations/fillwater.json')}
                autoPlay={true}
                loop={true}
                style={style.loadingAnimation}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 20,
                    color: '#002e60'
                }}>
                Territorio de calidad
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    loadingAnimation: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    imageLogo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});

export default Splash;
