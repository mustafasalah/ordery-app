import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import AppText from "./AppText";
import defaultStyle from "../configs/defaultStyle";
import { useTranslation } from "react-i18next";

const CategoriesListItem = ({ name, icon, color }) => {
    const { t } = useTranslation();

    const handlePress = useCallback(() => {
        // logic to navigation to category screen here
        console.log(name + " Clicked!");
    }, [name]);

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                {icon}
            </View>
            <AppText style={styles.name}>{t(name)}</AppText>
        </Pressable>
    );
};

export default CategoriesListItem;

const styles = StyleSheet.create({
    container: {
        width: "17%",
        marginHorizontal: "1.5%",
        marginBottom: 10,
        alignItems: "center",
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        ...defaultStyle.lightShadow,
    },
    name: {
        fontFamily: "Almarai_700Bold",
        fontSize: 14,
        marginVertical: 5,
        textAlign: "center",
    },
});
