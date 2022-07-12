import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    I18nManager,
    useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import colors from "../configs/colors";
import { useTranslation } from "react-i18next";
import AppText from "../components/AppText";
import layout from "../configs/layout";
import AppButton from "../components/AppButton";
import { FontAwesome } from "@expo/vector-icons";
import defaultStyle from "../configs/defaultStyle";

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
                <View>
                    <View>
                        <View style={styles.illustrationContainer}>
                            <Image
                                style={styles.illustration}
                                source={require("../assets/illustration-1.png")}
                            />
                            <AppText style={styles.headText} numberOfLines={2}>
                                {t("welcome_head_1")}
                            </AppText>
                            <AppText
                                style={styles.descriptionText}
                                numberOfLines={3}
                            >
                                {t("welcome_description_1")}
                            </AppText>
                        </View>
                    </View>
                    <View style={styles.btnsContainer}>
                        <AppButton
                            style={[styles.navigationBtns, styles.skipBtn]}
                            noShadow
                        >
                            {t("skip")}
                        </AppButton>
                        <AppButton
                            style={[styles.navigationBtns, styles.nextBtn]}
                            noShadow
                        >
                            {t("next")}
                            {"  "}
                            <FontAwesome
                                name={
                                    I18nManager.isRTL
                                        ? "angle-left"
                                        : "angle-right"
                                }
                                size={24}
                                color={colors.primary}
                            />
                        </AppButton>
                    </View>
                </View>
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
    },
    skipBtn: {
        color: colors.secondary75,
        fontFamily: "Almarai_700Bold",
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
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
        marginTop: 10,
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
        marginTop: 20,
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
