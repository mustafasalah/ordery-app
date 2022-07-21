import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import OffersSlider from "../components/OffersSlider";
import Label from "../components/Label";
import { useTranslation } from "react-i18next";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../components/AppButton";

const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <Screen>
            <OffersSlider />
            <Label icon={faUtensils} onViewAll={() => console.log("pressed!")}>
                {t("recommended_restaurants")}
            </Label>
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
