import { StyleSheet } from "react-native";
import React from "react";
import SearchBox from "../components/SearchBox";
import Screen from "../components/Screen";
import RestaurantItem from "../components/RestaruantItem";
import { useSelector } from "react-redux";
import layout from "../configs/layout";
import { FlatList } from "react-native-gesture-handler";
import SearchFilterModal from "../components/SearchFilterModal";

const DiscoverScreen = () => {
    const restuarants = useSelector((state) => state.restaurants);

    return (
        <Screen noScrollView>
            <SearchBox />
            <FlatList
                style={{
                    marginTop: 20,
                    paddingTop: 5,
                    marginHorizontal: -layout.screenHorizontalPadding,
                }}
                data={restuarants}
                renderItem={({ item }) => <RestaurantItem {...item} />}
                keyExtractor={(item) => item.id}
            />
            <SearchFilterModal />
        </Screen>
    );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
