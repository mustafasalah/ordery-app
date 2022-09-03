import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBox from "../components/SearchBox";
import Screen from "../components/Screen";
import RestaurantItem from "../components/RestaruantItem";
import { useSelector } from "react-redux";

const DiscoverScreen = () => {
    const restuarants = useSelector((state) => state.restaurants);

    return (
        <Screen noScrollView>
            <SearchBox />
            <RestaurantItem {...restuarants[0]} />
            {/* <FlatList
                data={restuarants}
                renderItem={({ item }) => <RestaurantItem {...item} />}
                keyExtractor={(item) => item.id}
            /> */}
        </Screen>
    );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
