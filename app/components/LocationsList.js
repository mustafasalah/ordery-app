import { StyleSheet, FlatList } from "react-native";
import React, { useCallback } from "react";
import LocationSelectItem from "./LocationSelectItem";
import ItemListSeperator from "./ItemListSeperator";

const LocationsList = ({ style, data, onSelect, selectLocation }) => {
    const handleLocationSelect = useCallback((location) => onSelect(location));
    return (
        <FlatList
            style={style}
            data={data}
            renderItem={({ item }) => {
                return (
                    <LocationSelectItem
                        onPress={handleLocationSelect}
                        selected={selectLocation === item.label}
                        {...item}
                    />
                );
            }}
            ItemSeparatorComponent={ItemListSeperator}
            keyExtractor={(item) => item.value}
        />
    );
};

export default LocationsList;

const styles = StyleSheet.create({});
