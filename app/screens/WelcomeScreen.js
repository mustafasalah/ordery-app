import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    useWindowDimensions,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../configs/colors";
import { useTranslation } from "react-i18next";
import layout from "../configs/layout";
import AppButton from "../components/AppButton";
import { FontAwesome } from "@expo/vector-icons";
import defaultStyle from "../configs/defaultStyle";
import OnBoard from "../components/OnBoard";

const WelcomeScreen = () => {
    const { t } = useTranslation();
    const { width: windowWidth } = useWindowDimensions();

    return (
        <Screen notSafe>
            <ImageBackground
                imageStyle="cover"
                source={require("../assets/bg.png")}
                style={[styles.background]}
            >
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/logo.png")} />
                </View>

                <OnBoard />

                <View
                    style={[
                        styles.authContainer,
                        {
                            borderTopLeftRadius: windowWidth / 2,
                            borderTopRightRadius: windowWidth / 2,
                        },
                    ]}
                >
                    <AppButton style={[styles.authBtns]}>
                        {
                            <FontAwesome
                                name="plus"
                                size={18}
                                color={colors.white}
                            />
                        }
                        {"  "}
                        {t("signup")}
                    </AppButton>
                    <AppButton
                        style={[styles.authBtns, styles.loginBtn]}
                        noShadow
                    >
                        {
                            <FontAwesome
                                name="sign-in"
                                size={18}
                                color={colors.secondary}
                            />
                        }
                        {"  "}
                        {t("login")}
                    </AppButton>
                </View>
            </ImageBackground>
        </Screen>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: "transparent",
        color: colors.secondary,
        marginTop: 10,
    },
    authBtns: {
        width: 200,
    },
    navigationBtns: {
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        paddingVertical: 0,
        fontSize: 18,
    },
    nextBtn: {
        color: colors.primary,
        paddingEnd: 20,
    },
    skipBtn: {
        color: colors.secondary75,
        fontFamily: "Almarai_700Bold",
        paddingStart: 20,
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionText: {
        textAlign: "center",
        color: colors.white,
        fontSize: 16,
        lineHeight: 28,
        marginTop: 10,
        paddingHorizontal: "12%",
    },
    headText: {
        textAlign: "center",
        lineHeight: 32,
        color: colors.primary,
        fontSize: 20,
        fontFamily: "Almarai_800ExtraBold",
        marginTop: 15,
        paddingHorizontal: 10,
    },
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: layout.safeStatusbarHeight,
        paddingHorizontal: layout.screenHorizontalPadding,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    illustrationContainer: {
        aspectRatio: 1,
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 400,
        alignItems: "center",
        paddingBottom: 50,
        marginTop: 50,
        marginBottom: 20,
        ...defaultStyle.shadow,
    },
    illustration: {
        marginTop: -50,
        width: 220,
        height: 220,
        resizeMode: "contain",
    },
    authContainer: {
        paddingTop: 30,
        backgroundColor: colors.white,
        height: 170,
        alignItems: "center",
        justifyContent: "center",
        ...defaultStyle.shadow,
    },
});
