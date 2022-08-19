import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";

const FormLabel = ({ children, icon }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <FontAwesomeIcon icon={icon} size={24} color={colors.primary} />
                <AppText style={styles.label}>{children}</AppText>
            </View>
        </View>
    );
};

export default FormLabel;

const styles = StyleSheet.create({
    wrapper: { overflow: "hidden" },
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginHorizontal: "15%",
        paddingTop: 15,
        paddingBottom: 20,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        marginTop: "-42%",
        width: "70%",
        aspectRatio: 1,
        backgroundColor: colors.secondary,
        ...defaultStyle.shadow,
    },
    label: {
        fontFamily: "Almarai_700Bold",
        fontSize: 18,
        color: colors.white,
        marginTop: 5,
        marginBottom: 10,
        ...defaultStyle.textShadow,
    },
});
