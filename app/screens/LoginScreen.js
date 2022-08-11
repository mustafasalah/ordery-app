import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Logo from "../components/Logo";
import layout from "../configs/layout";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import { useTranslation } from "react-i18next";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import FormField from "../components/forms/FormField";
import Form from "../components/forms/Form";
import {
    faAt,
    faUnlockKeyhole,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../components/forms/SubmitButton";
import AppButton from "../components/AppButton";
import * as yup from "yup";

const LoginScreen = () => {
    const { t } = useTranslation();

    return (
        <Screen noScrollView withoutTabBarMargin>
            <ImageBackground
                source={require("../assets/bg.png")}
                resizeMode="cover"
                style={styles.background}
            >
                <Logo />
                <View style={styles.loginContainer}>
                    <Form
                        label={{ icon: faRightToBracket, content: t("login") }}
                        style={styles.loginForm}
                        validationSchema={yup.object({
                            email: yup.string().email().required(),
                            password: yup.string().min(6).max(20).required(),
                        })}
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        <FormField
                            label={t("email")}
                            name="email"
                            placeholder="email@example.com"
                            icon={faAt}
                            keyboardType="email-address"
                        />

                        <FormField
                            label={t("password")}
                            name="password"
                            type="password"
                            icon={faUnlockKeyhole}
                            secureTextEntry
                        />

                        <AppButton
                            style={styles.forgetPassword}
                            textStyle={styles.forgetPasswordText}
                            noShadow
                        >
                            {t("forget_your_password")}
                        </AppButton>

                        <SubmitButton icon={faDoorOpen}>
                            {t("enter")}
                        </SubmitButton>
                    </Form>
                </View>
            </ImageBackground>
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    forgetPassword: {
        backgroundColor: "transparent",
        alignSelf: "flex-end",
        paddingHorizontal: 0,
        marginTop: 10,
    },
    forgetPasswordText: {
        color: colors.secondary,
        fontSize: 14,
        fontFamily: "Almarai_400Regular",
        textDecorationLine: "underline",
    },
    background: {
        flex: 1,
        paddingTop: layout.safeStatusbarHeight,
    },
    loginContainer: {
        flex: 1,
        marginTop: 20,
        backgroundColor: colors.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        ...defaultStyle.shadow,
    },
    loginForm: {
        paddingHorizontal: 20,
    },
});
