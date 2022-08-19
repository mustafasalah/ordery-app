import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthScreen from "../components/AuthScreen";
import Form from "../components/forms/Form";
import {
    faUserPlus,
    faUser,
    faAt,
    faUnlockKeyhole,
    faPlus,
    faMobileScreenButton,
    faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import FormField from "../components/forms/FormField";
import AppButton from "../components/AppButton";
import SubmitButton from "../components/forms/SubmitButton";
import SocialMediaAuth from "../components/SocialMediaAuth";

const SignupScreen = () => {
    const { t } = useTranslation();

    return (
        <AuthScreen>
            <Form
                label={{ icon: faUserPlus, content: t("signup") }}
                style={styles.signForm}
                validationSchema={yup.object({
                    fullname: yup.string().min(2).max(50).required(),
                    email: yup.string().email().required(),
                    gender: yup.string().oneOf(["m", "f", ""]).notRequired(),
                    phone_number: yup
                        .string()
                        .matches("^[0-9]+$", t("please enter numbers only"))
                        .matches(
                            "^249",
                            t("phone number must start with 249 (Sudan Key)")
                        )
                        .test(
                            "len",
                            t("phone number must be exactly 12 numbers"),
                            (val) => val.toString().length === 12
                        )
                        .required(),
                    password: yup.string().min(6).max(20).required(),
                    confirm_password: yup
                        .string()
                        .oneOf(
                            [yup.ref("password")],
                            t("password_doesnot_match")
                        )
                        .required(),
                })}
                initialValues={{
                    fullname: "",
                    email: "",
                    phone_number: "249",
                    gender: "",
                    password: "",
                    confirm_password: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <FormField
                    label={t("fullname")}
                    name="fullname"
                    icon={faUser}
                />

                <FormField
                    label={t("email")}
                    name="email"
                    placeholder="email@example.com"
                    icon={faAt}
                    keyboardType="email-address"
                />

                <FormField
                    label={t("phone_number")}
                    name="phone_number"
                    placeholder="249XXXXXXXXX"
                    maxLength={12}
                    icon={faMobileScreenButton}
                    keyboardType="phone-pad"
                />

                <FormField
                    label={t("gender")}
                    options={[
                        { label: "male", value: "m" },
                        { label: "female", value: "f" },
                        { label: "none", value: "" },
                    ]}
                    name="gender"
                    type="radio"
                />

                <FormField
                    label={t("password")}
                    name="password"
                    icon={faUnlockKeyhole}
                    secureTextEntry
                />

                <FormField
                    label={t("confirm_password")}
                    name="confirm_password"
                    icon={faCheckDouble}
                    secureTextEntry
                />

                <SubmitButton icon={faPlus}>{t("create")}</SubmitButton>
            </Form>

            <SocialMediaAuth type="signup" />
            {/* <LoginFooter /> */}
        </AuthScreen>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    signForm: {
        paddingHorizontal: 20,
    },
});
