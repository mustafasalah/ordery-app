import { StyleSheet, View } from "react-native";
import React from "react";
import { ErrorMessage as ErrorMsg } from "formik";
import AppText from "../AppText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import colors from "../../configs/colors";
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ name }) => {
    const { t } = useTranslation();

    return (
        <ErrorMsg name={name}>
            {(error) => (
                <View style={styles.container}>
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        color={colors.red}
                        size={12}
                    />
                    <AppText style={styles.errorMessage}>{t(error)}</AppText>
                </View>
            )}
        </ErrorMsg>
    );
};

export default ErrorMessage;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        marginStart: 4,
    },
    errorMessage: {
        color: colors.red,
        marginStart: 5,
        fontSize: 13,
    },
});
