import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import colors from "../configs/colors";

const Screen = ({ notSafe = false, children }) => {
    if (notSafe) return <View style={styles.container}>{children}</View>;

    return (
        <SafeAreaView style={[styles.container, styles.safeContainer]}>
            {children}
        </SafeAreaView>
    );
};

export default Screen;

const styles = StyleSheet.create({
    safeContainer: defaultStyle.safeContainer,
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
});
