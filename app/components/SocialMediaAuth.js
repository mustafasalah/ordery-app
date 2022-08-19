import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../configs/colors";
import AppText from "./AppText";
import { useTranslation } from "react-i18next";
import {
    faFacebook,
    faGoogle,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaButton from "./SocialMediaButton";

const SocialMediaAuth = ({ type = "login" }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.seperator}></View>
            <AppText style={styles.text}>{t(`or_${type}_via`)}</AppText>
            <View style={styles.btnContainer}>
                <SocialMediaButton
                    icon={faGoogle}
                    label={t("login_via_google")}
                    color="#DB4437"
                />
                <SocialMediaButton
                    icon={faFacebook}
                    label={t("login_via_facebook")}
                    color="#4267B2"
                />
                <SocialMediaButton
                    icon={faTwitter}
                    label={t("login_via_twitter")}
                    color="#1DA1F2"
                />
            </View>
        </View>
    );
};

export default SocialMediaAuth;

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
    },
    seperator: {
        height: 2,
        backgroundColor: colors.border,
        marginHorizontal: 15,
    },
    text: {
        textAlign: "center",
        marginTop: -12,
        backgroundColor: colors.white,
        width: 120,
        alignSelf: "center",
        marginBottom: 30,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
});
