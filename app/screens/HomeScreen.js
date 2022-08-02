import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Screen from "../components/Screen";
import OffersSlider from "../components/OffersSlider";
import Label from "../components/Label";
import { useTranslation } from "react-i18next";
import HorizontalList from "../components/HorizontalList";
import { faShapes, faUtensils } from "@fortawesome/free-solid-svg-icons";
import CategoriesList from "../components/CategoriesList";
import TrendingMeals from "../components/TrendingMeals";
import LocationModal from "../components/LocationModal";

const HomeScreen = ({ navigation }) => {
    // const scrollView = useRef(null);
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener("tabPress", (e) => {
    //         // Prevent default behavior
    //         e.preventDefault();
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    const { t } = useTranslation();

    const [locationModalShown, setLocationModalShown] = useState(true);

    const [meals, setMeals] = useState([
        {
            id: 1,
            imageSrc: require("../assets/image-1.jpg"),
            name: {
                ar: "ساندوتش الدجاج",
                en: "Chicken Sandwich",
            },
            restaurant: {
                ar: "دجاج كنتاكي",
                en: "KFC",
            },
            deliveryEST: [15, 35],
            isNew: true,
        },
        {
            id: 2,
            imageSrc: require("../assets/image-2.jpg"),
            name: {
                ar: "تريبل تريت بوكس",
                en: "Triple Treat Box",
            },
            restaurant: {
                ar: "بيتزا هت",
                en: "Pizza Hut",
            },
            deliveryEST: [40, 60],
            isNew: false,
        },
        {
            id: 3,
            imageSrc: require("../assets/image-3.jpg"),
            name: {
                ar: "تشيزي بوكت بيتزا",
                en: "Cheesy Pocket Pizza",
            },
            restaurant: {
                ar: "ديبونيرز",
                en: "Debonairs Pizza",
            },
            deliveryEST: [35, 55],
            isNew: false,
        },
        {
            id: 4,
            imageSrc: require("../assets/image-4.jpg"),
            name: {
                ar: "وجبة الكريسبي",
                en: "Crispy Meal",
            },
            restaurant: {
                ar: "فودبوينت",
                en: "Food Point",
            },
            deliveryEST: [20, 40],
            isNew: false,
        },
    ]);

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
            <TrendingMeals meals={meals} />
            <LocationModal
                visible={locationModalShown}
                onClose={() => {
                    setLocationModalShown(false);
                    console.log("Closed!");
                }}
            />
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
