import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import colors from "../configs/colors";

const FavouriteButton = ({ active = false, style, ...props }) => {
    return (
        <Pressable style={[styles.btn, style]} {...props}>
            <FontAwesomeIcon
                size={18}
                color={active ? colors.red : colors.secondary50}
                icon={active ? faHeartSolid : faHeart}
            />
        </Pressable>
    );
};

export default FavouriteButton;

const styles = StyleSheet.create({
    btn: {
        padding: 12,
    },
});
