import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../configs/colors";
import AppText from "../AppText";
import FieldLabel from "./FieldLabel";
import FormField from "./FormField";

const SelectionField = ({ labelIcon, label, options, name }) => {
    return (
        <View style={styles.container}>
            <FieldLabel stretch>
                <FontAwesomeIcon
                    icon={labelIcon}
                    color={colors.primary}
                    size={16}
                />
                <AppText style={styles.label}> {label}</AppText>
            </FieldLabel>

            <FormField
                options={options}
                name={name}
                type="radio-btn"
                style={{ marginTop: 15 }}
            />
        </View>
    );
};

export default SelectionField;

const styles = StyleSheet.create({
    container: { marginTop: 20 },
    label: { fontFamily: "Almarai_700Bold" },
});
