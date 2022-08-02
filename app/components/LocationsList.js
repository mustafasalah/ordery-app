import { StyleSheet, FlatList } from "react-native";
import React from "react";
import LocationSelectItem from "./LocationSelectItem";
import ItemListSeperator from "./ItemListSeperator";

const LocationsList = ({ style }) => {
    return (
        <FlatList
            style={style}
            data={[
                { value: 1, label: "امدرمان, الثورة" },
                { value: 2, label: "الخرطوم, العمارات" },
                { value: 3, label: "الخرطوم, العمارات" },
                { value: 4, label: "الخرطوم, العمارات" },
                { value: 5, label: "الخرطوم, العمارات" },
                { value: 6, label: "الخرطوم, العمارات" },
                { value: 7, label: "الخرطوم, العمارات" },
                { value: 8, label: "الخرطوم, العمارات" },
                { value: 9, label: "الخرطوم, العمارات" },
            ]}
            renderItem={({ item }) => {
                return <LocationSelectItem {...item} />;
            }}
            ItemSeparatorComponent={ItemListSeperator}
            keyExtractor={(item) => item.value}
        />
    );
};

export default LocationsList;

const styles = StyleSheet.create({});
