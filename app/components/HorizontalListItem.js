import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";

const HorizontalListItem = ({ id, label, imageSource, onPress }) => {
    return (
        <Pressable style={styles.item} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <AppText style={styles.name}>{label}</AppText>
        </Pressable>
    );
};

export default HorizontalListItem;

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        marginHorizontal: 8,
    },
    name: {
        fontFamily: "Almarai_700Bold",
        marginTop: 5,
    },
    image: {
        width: 60,
        height: 60,
    },
    imageContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        ...defaultStyle.shadow,
    },
});
