import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    ScrollView,
} from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import colors from "../configs/colors";
import layout from "../configs/layout";

const Screen = ({ safe = false, children }) => {
    if (safe)
        return (
            <SafeAreaView style={defaultStyle.safeContainer}>
                <View style={styles.container}>{children}</View>
            </SafeAreaView>
        );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>{children}</View>
        </ScrollView>
    );
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        marginTop: 15,
        marginBottom: 65,
        paddingHorizontal: layout.screenHorizontalPadding,
        overflow: "visible",
    },
});
