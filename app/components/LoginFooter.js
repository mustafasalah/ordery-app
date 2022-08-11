import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import AppButton from "./AppButton";
import { useTranslation } from "react-i18next";
import colors from "../configs/colors";

const LoginFooter = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <AppText>{t("don't_have_an_account")}</AppText>
            <AppButton style={styles.btn} textStyle={styles.btnText} noShadow>
                {t("signup_now")}
            </AppButton>
        </View>
    );
};

export default LoginFooter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    btn: {
        backgroundColor: "transparent",
        paddingHorizontal: 5,
    },
    btnText: {
        color: colors.primary,
        fontSize: 14,
        textDecorationLine: "underline",
    },
});
