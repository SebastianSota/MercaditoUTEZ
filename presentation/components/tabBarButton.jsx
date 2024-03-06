import { Animated, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Image } from "@rneui/themed";


export default ({ item, accessibilityState, onPress }) => {

    const animatedValues = {
        translate: useRef(new Animated.Value(0)).current,
        scale: useRef(new Animated.Value(0)).current,
    }

    useEffect(() => {
        handleAnimated();
    }, [accessibilityState.selected]);

    const { translate, scale } = animatedValues;

    const handleAnimated = () => {
        Animated.parallel([
            Animated.timing(translate, {
                toValue: accessibilityState.selected ? 1 : 0,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(scale, {
                toValue: accessibilityState.selected ? 1 : 0,
                duration: 250,
                useNativeDriver: false,
            }),
        ]).start()
    };

    const translateStyle = {
        transform: [
            {
                translateY: translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -30],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    const scaleStyle = {
        opacity: scale.interpolate({
            inputRange: [.5, 1],
            outputRange: [.5, 1],
            extrapolate: 'clamp',
        }),
        transform: [
            {
                scale: scale
            }
        ]
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Animated.View style={[styles.button, translateStyle]}>
                <Animated.View style={[{
                    width: 50, height: 50, borderRadius: 100, position: 'absolute',
                    backgroundColor: 'rgb(8, 151, 121)'
                }, scaleStyle]} />
                {item.screen == 'Profile' ? (<Image source={{ uri: item.icon }}
                    style={{ width: 32, height: 32, borderRadius: 30 }} />) : (
                    <Ionicons name={item.icon} color={accessibilityState.selected ? 'white' : 'rgb(8, 53, 101)'} size={22} />
                )}
            </Animated.View>
            <Animated.Text style={[styles.title, { opacity: scale }]}>{item.name}</Animated.Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(8, 53, 101)',
        position: 'absolute',
        bottom: 20,
    }
});