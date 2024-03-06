import { useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword, initializeAuth, getReactNativePersistence, } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Firebase } from "../../config/firebase";
import { Button, Divider, Image, Input, Text } from "@rneui/themed";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Api } from "../../config/api";
import Loading from "../components/loading";
import LottieView from "lottie-react-native";
import Animation from "../components/animation";
import { useNavigation } from "@react-navigation/native";




Login = () => {

    const navigation = useNavigation();

    const { appFirebase } = Firebase();
    const { apiConfigH } = Api();

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setPasswordVisibility] = useState(true);
    const [passwordIsFocused, setPasswordFocused] = useState(false);
    const [usernameIsFocused, setUserNameFocused] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);


    const auth = () => {
        return initializeAuth(appFirebase, {
            persistence: getReactNativePersistence(AsyncStorage)
        })
    };

    const goToRegister = () => {
        navigation.navigate("Register");
    };

    const validateUserFirebase = async () => {
        try {
            console.log(appFirebase);
            const response = await createUserWithEmailAndPassword(auth, user, password);
            const userCredential = await response.json();
            console.log(userCredential);
            const user = userCredential.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    };

    const validateUserService = async () => {
        setBtnLoading(true);
        if (user == null && password == null) {
            Alert.alert('Error al iniciar sesión', 'Usuario o contraseña no ingresado', [{
                text: 'Cerrar', onPress: () => {
                    setBtnLoading(false);
                }, style: "cancel"
            }]);
        } else {
            try {
                const payload = { username: user, password: password };
                const response = await fetch("http://192.168.100.137:8080/login", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                },);
                if (response.ok) {
                    AsyncStorage.removeItem("logedUser");
                    const userCredential = await response.json();
                    AsyncStorage.setItem("logedUser", JSON.stringify(userCredential));
                    setBtnLoading(false);
                    navigation.replace("BottomTab");
                } else {
                    Alert.alert('Ocurrio un error', 'Usuario o contraseña incorrecto', [{
                        text: 'Cerrar', onPress: () => {
                            setBtnLoading(false);
                        }
                    }]);
                }
            } catch (error) {
                console.log(error);
                Alert.alert('¡Upss!', 'Ocurrio un error inesperado', [{
                    text: 'Cerrar', onPress: () => {
                        setBtnLoading(false);
                    }
                }]);
            }
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#083565'} />
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.backGLogo}>
                        <Image style={styles.logo} source={require('../../assets/images/Mercadito.gif')} />
                    </View>
                    <View style={styles.form}>
                        <Input inputContainerStyle={styles.inputContainer} placeholder="Usuario"
                            leftIcon={!usernameIsFocused && (
                                <AntDesign name="user" size={19} color='gray' />
                            )}
                            onFocus={() => setUserNameFocused(true)}
                            onBlur={() => setUserNameFocused(false)}
                            value={user}
                            onChangeText={setUser} />

                        <Input inputContainerStyle={styles.inputContainer} placeholder="Contraseña" secureTextEntry={showPassword}
                            leftIcon={!passwordIsFocused && (
                                <AntDesign name="key" size={19} color='gray' />
                            )}
                            rightIcon={!showPassword ? (
                                <TouchableOpacity onPress={() => setPasswordVisibility(!showPassword)}>
                                    <AntDesign name="eye" size={20} color='black' />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setPasswordVisibility(!showPassword)}>
                                    <AntDesign name="eye" size={20} color='gray' />
                                </TouchableOpacity>
                            )}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            value={password}
                            onChangeText={setPassword} />
                    </View>
                    <View style={styles.btnContain}>
                        <Button title={!btnLoading ? 'Iniciar sesión' : undefined}
                            color={'#083565'} buttonStyle={{ height: '100%' }} containerStyle={styles.btn}
                            icon={btnLoading ? () => <Animation /> : undefined}
                            onPress={validateUserService} />
                        <Text style={styles.forgotText} >¿Olvidaste tu contraseña?</Text>
                        <Text style={styles.orText}>O</Text>
                        <Button title={'Registrarse'}
                            color={'#0aae88'} buttonStyle={{ height: '100%' }} containerStyle={styles.btnRegister}
                            onPress={goToRegister} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    logo: {
        width: 'auto',
        height: 200,
        resizeMode: 'contain',
        marginTop: 5,
    },
    backGLogo: {
        width: '100%',
        height: 250,
        backgroundColor: "#0aae88",
        justifyContent: 'center'
    },
    form: {
        width: '75%',
        marginTop: 30,
    },
    inputContainer: {
        borderColor: '#083565',
        borderBottomWidth: 0.3,
        marginTop: 5
    },
    divid: {
        width: '100%',
        borderColor: "gray",
        borderWidth: 0.5,
    },
    btnContain: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        height: '100%',
    },
    btn: {
        borderRadius: 15,
        width: '80%',
        height: 50,
    },
    btnRegisterContain: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        height: '100%',
    },
    btnRegister: {
        borderRadius: 15,
        width: '80%',
        height: 50,
        marginTop: 10
    },
    forgotText: {
        color: '#0aae88',
        fontSize: 19,
        marginTop: 50,
    },
    orText: {
        marginTop: 20,
    },
    scroll: {
        width: '100%',
        height: '100%',
    }
});

export default Login;