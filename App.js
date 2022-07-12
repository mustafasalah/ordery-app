import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "intl-pluralrules";
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
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
    const [fontsLoaded] = useFonts({
        Almarai_300Light,
        Almarai_400Regular,
        Almarai_700Bold,
        Almarai_800ExtraBold,
    });

    const onLayoutRootView = async () => {
        await SplashScreen.hideAsync();
    };

    useEffect(() => {
        (async () => {
            await SplashScreen.preventAutoHideAsync();
        })();
    }, []);

    if (!fontsLoaded) return null;

    return (
        <View style={styles.screenContainer} onLayout={onLayoutRootView}>
            <WelcomeScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colors.gray,
        direction: "rtl",
        flex: 1,
    },
});
