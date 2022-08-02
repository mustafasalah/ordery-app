import { Pressable, StyleSheet } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import AppText from "./AppText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../configs/colors";

const AppButton = ({
    children,
    style,
    icon,
    textStyle,
    noShadow = false,
    ...props
}) => {
    return (
        <Pressable
            style={[
                styles.btn,
                noShadow ? null : defaultStyle.lightShadow,
                noShadow ? null : defaultStyle.textShadow,
                style,
            ]}
            {...props}
        >
            <AppText
                style={[
                    styles.text,
                    noShadow ? null : defaultStyle.textShadow,
                    textStyle,
                ]}
            >
                {children}
            </AppText>
            {icon && (
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={icon}
                    size={16}
                    color={colors.white}
                />
            )}
        </Pressable>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    icon: {
        marginStart: 6,
    },
    btn: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "Almarai_800ExtraBold",
    },
});
