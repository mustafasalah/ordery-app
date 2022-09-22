import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../configs/colors";
import AppText from "../AppText";
import { faBuildingLock } from "@fortawesome/free-solid-svg-icons";
import FieldLabel from "./FieldLabel";
import { useTranslation } from "react-i18next";
import FormField from "./FormField";

const RestaurantsStatusField = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <FieldLabel stretch>
                <FontAwesomeIcon
                    icon={faBuildingLock}
                    color={colors.primary}
                    size={16}
                />
                <AppText style={styles.label}> {t("status")}</AppText>
            </FieldLabel>

            <FormField
                options={[
                    { label: t("all"), value: "" },
                    { label: t("opened"), value: "opened" },
                    { label: t("closed"), value: "closed" },
                ]}
                name="status"
                type="radio-btn"
                style={{ marginTop: 15 }}
            />
        </View>
    );
};

export default RestaurantsStatusField;

const styles = StyleSheet.create({
    container: { marginTop: 20 },
    label: { fontFamily: "Almarai_700Bold" },
});
