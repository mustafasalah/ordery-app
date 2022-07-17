import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import colors from "../configs/colors";

const Screen = ({ safe = false, children }) => {
    if (safe)
        return (
            <SafeAreaView
                style={[
                    styles.container,
                    defaultStyle.containerPadding,
                    defaultStyle.safeContainer,
                ]}
            >
                {children}
            </SafeAreaView>
        );

    return (
        <View style={[styles.container, defaultStyle.containerPadding]}>
            {children}
        </View>
    );
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
});
