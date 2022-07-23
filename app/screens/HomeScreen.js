import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import OffersSlider from "../components/OffersSlider";
import Label from "../components/Label";
import { useTranslation } from "react-i18next";
import AppButton from "../components/AppButton";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import AppText from "../components/AppText";
import HorizontalList from "../components/HorizontalList";
import { faShapes, faUtensils } from "@fortawesome/free-solid-svg-icons";
import CategoriesList from "../components/CategoriesList";

const HomeScreen = () => {
    const { t } = useTranslation();

    const [restData, setRestData] = useState([
        {
            imageSource: require("../assets/kfc.png"),
            label: "كنتاكي",
            onPress: () => console.log("kfc!!!"),
        },
        {
            imageSource: require("../assets/chicano.png"),
            label: "شيكانو",
            onPress: () => console.log("chicano!!!"),
        },
        {
            imageSource: require("../assets/pizzahut.png"),
            label: "بيتزا هت",
            onPress: () => console.log("pizzahut!!!"),
        },
        {
            imageSource: require("../assets/foodpoint.png"),
            label: "فودبوينت",
            onPress: () => console.log("foodpoint!!!"),
        },
        {
            imageSource: require("../assets/mc.png"),
            label: "ماكدونالدز",
            onPress: () => console.log("mc!!!"),
        },
        {
            imageSource: require("../assets/debonairs.png"),
            label: "ديبونيرز",
            onPress: () => console.log("debonairs!!!"),
        },
    ]);

    return (
        <Screen>
            <OffersSlider />
            <HorizontalList
                data={restData}
                label={{
                    icon: faUtensils,
                    title: t("recommended_restaurants"),
                    onViewAll: () => console.log("pressed!"),
                }}
            />
            <CategoriesList
                label={{ title: t("discover_by_categories"), icon: faShapes }}
            />
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
