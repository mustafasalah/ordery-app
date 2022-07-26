import { StyleSheet, View } from "react-native";
import React from "react";
import Label from "./Label";
import { useTranslation } from "react-i18next";
import { faHotjar } from "@fortawesome/free-brands-svg-icons";
import MealsListItem from "./MealsListItem";

const TrendingMeals = ({ meals }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.wrapper}>
            <Label icon={faHotjar}>{t("trending_meals")}</Label>
            {meals.map((meal) => (
                <MealsListItem key={meal.id} {...meal} />
            ))}
        </View>
    );
};

export default TrendingMeals;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
    },
});
