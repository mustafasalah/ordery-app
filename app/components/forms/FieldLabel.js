import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../configs/colors";

const FieldLabel = ({ children, style, stretch }) => {
    return (
        <View
            style={[
                styles.container,
                stretch ? styles.bottomBorder : undefined,
                style,
            ]}
        >
            <AppText
                style={[
                    styles.label,
                    stretch ? undefined : styles.bottomBorder,
                ]}
            >
                {children}
            </AppText>
        </View>
    );
};

export default FieldLabel;

const styles = StyleSheet.create({
    bottomBorder: {
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.border,
    },
    container: {
        flexDirection: "row",
    },
    label: {
        fontSize: 16,
        fontFamily: "Almarai_700Bold",
    },
});
