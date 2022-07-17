import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import OffersSlider from "../components/OffersSlider";

const HomeScreen = () => {
    return (
        <Screen>
            <OffersSlider />
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
