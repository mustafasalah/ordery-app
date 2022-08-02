import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";

const FieldLabel = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <AppText style={styles.label}>{children}</AppText>
        </View>
    );
};

export default FieldLabel;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    label: {
        fontSize: 16,
        fontFamily: "Almarai_700Bold",
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.border,
    },
});
