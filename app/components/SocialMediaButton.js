import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import AppText from "./AppText";

const SocialMediaButton = ({ label, icon, color }) => {
    return (
        <Pressable
            style={[
                styles.container,
                {
                    backgroundColor: color,
                    borderColor: color,
                },
            ]}
        >
            <View style={styles.icon}>
                <FontAwesomeIcon icon={icon} size={20} color={color} />
            </View>
            <AppText style={styles.text}>{label}</AppText>
        </Pressable>
    );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.white,
        justifyContent: "center",
        padding: 10,
        paddingStart: 14,
        borderTopStartRadius: 18,
        borderBottomStartRadius: 18,
        width: 50,
        height: 45,
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontFamily: "Almarai_700Bold",
        fontSize: 16,
        marginStart: 12,
        ...defaultStyle.textShadow,
    },
    container: {
        width: 320,
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
        borderWidth: 2,
        flexDirection: "row",
        marginBottom: 20,
        ...defaultStyle.shadow,
    },
});
