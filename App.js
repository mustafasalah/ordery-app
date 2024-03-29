import { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./app/configs/translation";
import colors from "./app/configs/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import "./app/configs/translation";
import {
    useFonts,
    Almarai_300Light,
    Almarai_400Regular,
    Almarai_700Bold,
    Almarai_800ExtraBold,
} from "@expo-google-fonts/almarai";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./app/navigators/AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./app/configs/store";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Almarai_300Light,
        Almarai_400Regular,
        Almarai_700Bold,
        Almarai_800ExtraBold,
    });

    const onLayoutRootView = useCallback(async () => {
        await SplashScreen.hideAsync();
    }, []);

    useEffect(() => {
        (async () => {
            await SplashScreen.preventAutoHideAsync();
        })();
    }, []);

    if (!fontsLoaded) return null;

    return (
        <Provider store={store}>
            <NavigationContainer>
                <View
                    style={styles.screenContainer}
                    onLayout={onLayoutRootView}
                >
                    <Navigator
                        initialRouteName="app"
                        screenOptions={{ headerShown: false }}
                    >
                        <Screen name="signup" component={SignupScreen} />
                        <Screen name="login" component={LoginScreen} />
                        <Screen name="welcome" component={WelcomeScreen} />
                        <Screen name="app" component={AppNavigator} />
                    </Navigator>
                    <StatusBar style="auto" />
                </View>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colors.gray,
        flex: 1,
    },
});
