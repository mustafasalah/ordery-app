import { StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";

const AppText = ({ style, children, ...props }) => {
    return (
        <Text style={[defaultStyle.appTextStyle, style]} {...props}>
            {children}
        </Text>
    );
};

export default AppText;
