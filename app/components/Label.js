import { I18nManager, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AppButton from "./AppButton";
import { useTranslation } from "react-i18next";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const Label = ({ children, icon, onViewAll }) => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <AppText style={styles.label}>
                {icon ? (
                    <>
                        <FontAwesomeIcon
                            icon={icon}
                            size={16}
                            color={colors.primary}
                        />
                        {"  "}
                    </>
                ) : undefined}
                {children}
            </AppText>
            {onViewAll ? (
                <AppButton style={styles.button} onPress={onViewAll} noShadow>
                    {t("view_all")}
                    {"  "}
                    <FontAwesomeIcon
                        icon={I18nManager.isRTL ? faLeftLong : faRightLong}
                        size={14}
                        color={colors.primary}
                    />
                </AppButton>
            ) : undefined}
        </View>
    );
};

export default Label;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "transparent",
        color: colors.primary,
        paddingHorizontal: 0,
        paddingVertical: 0,
        fontFamily: "Almarai_700Bold",
        fontSize: 14,
    },
    label: {
        fontSize: 16,
        fontFamily: "Almarai_800ExtraBold",
        paddingBottom: 3,
        borderBottomColor: colors.border,
        borderBottomWidth: 2,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
});
