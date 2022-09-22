import { StyleSheet, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import colors from "../../configs/colors";
import AppText from "../AppText";
import FieldLabel from "./FieldLabel";
import FormField from "./FormField";

const DeliveryTimeField = () => {
    const { t } = useTranslation();

    return (
        <>
            <FieldLabel stretch>
                <FontAwesomeIcon
                    icon={faStopwatch}
                    size={16}
                    color={colors.primary}
                />
                <AppText style={styles.label}> {t("delivery_time")}</AppText>
            </FieldLabel>
            <View style={styles.deliveryTimeFieldWrapper}>
                <AppText>{t("less_than")}</AppText>
                <FormField
                    name="deliveryTime"
                    style={styles.minutesField}
                    icon={faClock}
                    keyboardType="numeric"
                />
                <AppText>{t("minute")}</AppText>
            </View>
        </>
    );
};

export default DeliveryTimeField;

const styles = StyleSheet.create({
    minutesField: {
        width: 100,
        marginHorizontal: 7,
        marginTop: 0,
    },
    deliveryTimeFieldWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },
    label: {
        fontFamily: "Almarai_700Bold",
    },
});
