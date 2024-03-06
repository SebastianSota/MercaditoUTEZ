import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../presentation/screens/login";
import Register from "../../presentation/screens/register";
import Splash from "../../presentation/screens/splash";
import HomeNavigation from "./homeNavigation";

const Stack = createNativeStackNavigator();

MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTab" component={HomeNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={Register} options={{
                headerShown: true,
                headerTitle: 'Registro'
            }} />
        </Stack.Navigator>
    )
}

export default MainNavigation;