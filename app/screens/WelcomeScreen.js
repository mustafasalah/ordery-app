import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import { useTranslation } from "react-i18next";
import AppText from "../components/AppText";

const WelcomeScreen = () => {
    const { t } = useTranslation();

    return (
        <Screen notSafe>
            <ImageBackground
                imageStyle="cover"
                source={require("../assets/bg.png")}
                style={[styles.background, defaultStyle.safeContainer]}
            >
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/logo.png")} />
                </View>
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
                <View></View>
            </ImageBackground>
        </Screen>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
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
    },
    logoContainer: {
        alignItems: "center",
    },
    illustrationContainer: {
        aspectRatio: 1,
        backgroundColor: colors.secondary,
        borderRadius: 400,
        alignItems: "center",
        paddingBottom: 50,
    },
    illustration: {
        marginTop: -50,
        width: 220,
        height: 220,
        resizeMode: "contain",
    },
    authContainer: {},
});
