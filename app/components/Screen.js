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

const Screen = ({
    children,
    noScrollView = false,
    withoutTabBarMargin = false,
}) => {
    if (noScrollView === true)
        return (
            <View
                style={[
                    styles.container,
                    {
                        marginBottom: withoutTabBarMargin
                            ? 0
                            : layout.tabBarMargin,
                    },
                ]}
            >
                {children}
            </View>
        );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={[
                    styles.container,
                    {
                        marginTop: withoutTabBarMargin ? 0 : 15,
                        marginBottom: withoutTabBarMargin
                            ? 0
                            : layout.tabBarMargin,
                    },
                ]}
            >
                {children}
            </View>
        </ScrollView>
    );
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        paddingHorizontal: layout.screenHorizontalPadding,
        overflow: "visible",
    },
});
