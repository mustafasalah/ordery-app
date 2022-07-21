import { Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Label from "./Label";
import HorizontalListItem from "./HorizontalListItem";

const HorizontalList = ({ data, label }) => {
    return (
        <Pressable>
            <Label icon={label.icon} onViewAll={label.onViewAll}>
                {label.title}
            </Label>
            <ScrollView style={styles.container} horizontal>
                {data.map((props) => (
                    <HorizontalListItem key={props.label} {...props} />
                ))}
            </ScrollView>
        </Pressable>
    );
};

export default HorizontalList;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});
