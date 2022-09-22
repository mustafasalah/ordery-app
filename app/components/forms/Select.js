import React from "react";
import { View } from "react-native";
import OptionContext from "../../context/OptionContext";

const Select = ({ name, children }) => {
    return (
        <OptionContext.Provider value={name}>
            <View style={{ flexDirection: "row" }}>{children}</View>
        </OptionContext.Provider>
    );
};

export default Select;
