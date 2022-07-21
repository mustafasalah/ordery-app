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
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

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
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
