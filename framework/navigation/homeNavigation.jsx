import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from 'react-native';
import TabBarButton from "../../presentation/components/tabBarButton";
import Home from "../../presentation/screens/home/home";
import Profile from "../../presentation/screens/home/profile";
import Chat from "../../presentation/screens/home/chat";

const Tab = createBottomTabNavigator();


const HomeNavigation = () => {

    const tabs = [
        {
            id: 1,
            name: 'Inicio',
            screen: 'Home',
            icon: 'home',
            Component: Home
        },
        {
            id: 2,
            name: 'Mensajes',
            screen: 'Messages',
            icon: 'chatbubbles',
            Component: Chat
        },
        {
            id: 3,
            name: 'Mi perfil',
            screen: 'Profile',
            icon: 'https://lh3.googleusercontent.com/ogw/AF2bZyjqKK9Uw97sLKgYsqFcNyX-pf1xods-UiCakFQe',
            Component: Profile
        },
    ]

    return (
        <View style={styles.container}>
            <Tab.Navigator initialRouteName='Incidencias' screenOptions={{
                tabBarActiveTintColor: 'rgb(8, 151, 121)',
                tabBarInactiveTintColor: 'rgb(8, 53, 101)',
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    ...styles.tabBarContainer
                },
            }}>
                {
                    tabs.map((item, index) =>
                        <Tab.Screen key={item.id} name={item.name} component={item.Component}
                            options={{
                                tabBarShowLabel: false,
                                tabBarButton: (props) => <TabBarButton item={item} {...props}/>
                            }}
                        />
                    )
                }

            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
    },
    tabBarContainer: {
        height: 70,
        position: 'absolute',
        bottom: 25,
        right: 16,
        left: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default HomeNavigation;