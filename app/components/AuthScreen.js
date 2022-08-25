import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import layout from "../configs/layout";
import Logo from "./Logo";
import Screen from "./Screen";

const AuthScreen = ({ children, noScrollView, withoutWrapper }) => {
    return (
        <Screen
            noScrollView={noScrollView}
            withoutTabBarMargin
            noPaddingHorizontal
        >
            <ImageBackground
                source={require("../assets/bg.png")}
                resizeMode="cover"
                style={styles.background}
            >
                <Logo />
                {withoutWrapper ? (
                    children
                ) : (
                    <View style={styles.container}>{children}</View>
                )}
            </ImageBackground>
        </Screen>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: layout.safeStatusbarHeight,
        paddingHorizontal: layout.screenHorizontalPadding,
    },
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: colors.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        ...defaultStyle.shadow,
    },
});
