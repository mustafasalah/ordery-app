import {
    View,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
} from "react-native";
import React from "react";
import Label from "./Label";
import HorizontalListItem from "./HorizontalListItem";
import layout from "../configs/layout";

const HorizontalList = ({ data, label }) => {
    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.wrapper}>
            <Label icon={label.icon} onViewAll={label.onViewAll}>
                {label.title}
            </Label>
            <ScrollView
                style={{
                    width: windowWidth - 8,
                    marginStart: -8,
                }}
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
});
