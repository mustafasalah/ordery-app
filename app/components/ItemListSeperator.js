import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../configs/colors";

const ItemListSeperator = () => {
    return <View style={styles.seperator}></View>;
};

export default ItemListSeperator;

const styles = StyleSheet.create({
    seperator: {
        height: 2,
        backgroundColor: colors.border,
    },
});
