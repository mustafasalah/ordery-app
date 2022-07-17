import { Pressable } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import AppText from "./AppText";

const AppButton = ({ children, style, noShadow = false, ...props }) => {
    return (
        <Pressable {...props}>
            <AppText
                style={[
                    defaultStyle.primaryBtn,
                    noShadow ? null : defaultStyle.lightShadow,
                    noShadow ? null : defaultStyle.textShadow,
                    style,
                ]}
            >
                {children}
            </AppText>
        </Pressable>
    );
};

export default AppButton;
