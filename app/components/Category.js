import { Pressable, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AppText from "./AppText";
import colors from "../configs/colors";
import categoriesConfig from "../configs/categories";

const Category = ({ id }) => {
    const { name } = useSelector((state) => {
        return state.categories.find((category) => category.id === id);
    });

    const handlePress = useCallback(() => {
        console.log(name + " Pressed!");
    }, [id]);

    const { t } = useTranslation();

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            {categoriesConfig[name].miniIcon}
            <AppText style={styles.text}>{t(name)}</AppText>
        </Pressable>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 7,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        alignSelf: "flex-start",
        marginEnd: 7,
    },
    text: {
        color: colors.secondary75,
        marginStart: 3,
        fontSize: 12,
    },
});
