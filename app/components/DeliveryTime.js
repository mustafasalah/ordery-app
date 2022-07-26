import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import AppText from "./AppText";
import { useTranslation } from "react-i18next";

const DeliveryTime = ({ deliveryEST: [from, to] }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faStopwatch}
                size={10}
                color={colors.primary}
            />
            <AppText style={styles.time}>
                {t("delivery_from")} {from} {t("to")} {to} {t("minute")}
            </AppText>
        </View>
    );
};

export default DeliveryTime;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        paddingVertical: 3.5,
        backgroundColor: colors.gray,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 6,
    },
    time: {
        marginStart: 4,
        fontSize: 10,
        color: colors.secondary75,
    },
});
