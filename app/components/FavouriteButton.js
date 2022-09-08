import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import colors from "../configs/colors";

const FavouriteButton = ({ active = false, ...props }) => {
    return (
        <Pressable {...props}>
            <FontAwesomeIcon
                size={18}
                color={colors.red}
                icon={active ? faHeartSolid : faHeart}
            />
        </Pressable>
    );
};

export default FavouriteButton;

const styles = StyleSheet.create({});
