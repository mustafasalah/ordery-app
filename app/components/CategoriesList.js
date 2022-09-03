import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Label from "./Label";
import CategoriesListItem from "./CategoriesListItem";

import { useTranslation } from "react-i18next";
import colors from "../configs/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AppText from "./AppText";
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import defaultStyle from "../configs/defaultStyle";
import { useSelector } from "react-redux";
import categoriesConfig from "../configs/categories";

const CategoriesList = ({ label }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const categories = useSelector((state) => state.categories);
    const [categoriesData] = useState(() => {
        return categories.map((category) => {
            return { ...category, ...categoriesConfig[category.name] };
        });
    });

    const shownCategories = collapsed
        ? categoriesData
        : categoriesData.slice(0, 5);

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
