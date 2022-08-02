import { I18nManager, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import InsetShadow from "react-native-inset-shadow";
import FieldLabel from "../FieldLabel";
import colors from "../../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const insetShadow = {
    shadowOffset: 0,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
};

const TextField = ({ label, placeholder, value, style, icon }) => {
    return (
        <View style={[style]}>
            {label && <FieldLabel style={styles.label}>{label}</FieldLabel>}
            <View>
                <InsetShadow containerStyle={styles.input} {...insetShadow}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={placeholder}
                        placeholderTextColor={colors.secondary50}
                    />
                    {icon && (
                        <FontAwesomeIcon
                            icon={icon}
                            size={14}
                            color={colors.secondary50}
                            style={styles.icon}
                        />
                    )}
                </InsetShadow>
            </View>
        </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    label: {
        marginBottom: 15,
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        height: undefined,
        backgroundColor: colors.gray,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    inputText: {
        flex: 1,
        fontFamily: "Almarai_400Regular",
        fontSize: 16,
        color: colors.secondary75,
        textAlign: I18nManager.isRTL ? "right" : "left",
        paddingEnd: 15,
    },
});
