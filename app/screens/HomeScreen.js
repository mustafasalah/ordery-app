import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";

const HomeScreen = () => {
    return (
        <Screen>
            <View style={styles.header}></View>
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 15,
        ...defaultStyle.shadow,
    },
});
