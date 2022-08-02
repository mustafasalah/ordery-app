import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const LocationSelectItem = ({ onPress, label, value }) => {
    return (
        <Pressable onPress={() => onPress(value)} style={styles.container}>
            <FontAwesomeIcon
                icon={faLocationDot}
                size={14}
                color={colors.secondary50}
                style={styles.icon}
            />
            <AppText>{label}</AppText>
        </Pressable>
    );
};

export default LocationSelectItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.gray,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    icon: {
        marginEnd: 5,
    },
});
