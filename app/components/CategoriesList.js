import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Label from "./Label";
import CategoriesListItem from "./CategoriesListItem";
import PizzaIcon from "../assets/categories/pizza.svg";
import BurgerIcon from "../assets/categories/burger.svg";
import BananaSplitIcon from "../assets/categories/banana-split.svg";
import FriedChickenIcon from "../assets/categories/fried-chicken.svg";
import ShawarmaIcon from "../assets/categories/shawarma.svg";
import FishIcon from "../assets/categories/fish.svg";
import SteakIcon from "../assets/categories/steak.svg";
import SpaghettiIcon from "../assets/categories/spaghetti.svg";
import BobaIcon from "../assets/categories/boba.svg";
import FriesIcon from "../assets/categories/fries.svg";
import AppButton from "./AppButton";
import { useTranslation } from "react-i18next";
import colors from "../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import UpDoubleArrow from "../assets/angles-up-solid.svg";
import DownDoubleArrow from "../assets/angles-down-solid.svg";
import AppText from "./AppText";
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import defaultStyle from "../configs/defaultStyle";
const iconSize = { width: 42, height: 42 };
const CategoriesList = ({ label }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const [categories, setCategories] = useState([
        {
            name: "pizza",
            icon: <PizzaIcon {...iconSize} />,
            color: "#F6BE68",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "burger",
            icon: <BurgerIcon {...iconSize} />,
            color: "#A67F76",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "dessert",
            icon: <BananaSplitIcon {...iconSize} />,
            color: "#B6DDEE",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "chicken",
            icon: <FriedChickenIcon {...iconSize} />,
            color: "#E64042",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "steak",
            icon: <SteakIcon {...iconSize} />,
            color: "#DADEE5",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "fish",
            icon: <FishIcon {...iconSize} />,
            color: "#A5B9C0",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "shawarma",
            icon: <ShawarmaIcon {...iconSize} />,
            color: "#A14939",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "asian",
            icon: <SpaghettiIcon {...iconSize} />,
            color: "#DFA361",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "drinks",
            icon: <BobaIcon {...iconSize} />,
            color: "#E2BEA1",
            onPress() {
                console.log("category clicked!");
            },
        },
        {
            name: "fries",
            icon: <FriesIcon {...iconSize} />,
            color: "#EBA75B",
            onPress() {
                console.log("category clicked!");
            },
        },
    ]);

    const shownCategories = collapsed ? categories : categories.slice(0, 5);

    return (
        <View style={styles.wrapper}>
            <Label icon={label.icon}>{label.title}</Label>
            <View style={styles.container}>
                {shownCategories.map((category) => (
                    <CategoriesListItem key={category.name} {...category} />
                ))}
            </View>
            <Pressable
                style={styles.collapseBtn}
                onPress={() => setCollapsed(!collapsed)}
            >
                <AppText style={styles.collpaseBtnText}>
                    {collapsed
                        ? t("most_wanted_categories")
                        : t("more_categories")}
                    {"  "}
                    <FontAwesomeIcon
                        icon={collapsed ? faAngleDoubleUp : faAngleDoubleDown}
                        size={13}
                        color={colors.secondary75}
                    />
                </AppText>
            </Pressable>
        </View>
    );
};

export default CategoriesList;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    collapseBtn: {
        alignSelf: "center",
        backgroundColor: colors.white,
        color: colors.secondary75,
        fontSize: 13,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        ...defaultStyle.lightShadow,
    },
    collpaseBtnText: {
        fontFamily: "Almarai_700Bold",
        fontSize: 13,
        color: colors.secondary75,
    },
    wrapper: {
        marginTop: 25,
    },
});
