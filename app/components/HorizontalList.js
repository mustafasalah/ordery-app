import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Label from "./Label";
import HorizontalListItem from "./HorizontalListItem";

const HorizontalList = ({ data, label }) => {
    return (
        <View style={styles.wrapper}>
            <Label icon={label.icon} onViewAll={label.onViewAll}>
                {label.title}
            </Label>
            <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {data.map((props) => (
                    <HorizontalListItem key={props.id} {...props} />
                ))}
            </ScrollView>
        </View>
    );
};

export default HorizontalList;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
    },
    container: {
        // flexDirection: "row",
    },
});
