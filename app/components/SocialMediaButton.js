import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";

const SocialMediaButton = ({ icon, color }) => {
    return (
        <Pressable style={[styles.container, { borderColor: color }]}>
            <FontAwesomeIcon icon={icon} size={22} color={color} />
        </Pressable>
    );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderWidth: 2,
        justifyContent: "center",
        padding: 10,
        borderRadius: 30,
        width: 50,
        height: 50,
        alignItems: "center",
        marginHorizontal: 10,
        ...defaultStyle.lightShadow,
    },
});
