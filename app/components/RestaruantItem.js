import { I18nManager, StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useCallback } from "react";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import Rating from "./Rating";
import AppText from "./AppText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Category from "./Category";
import FavouriteButton from "./FavouriteButton";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const RestaurantItem = ({
    id,
    name,
    logo,
    rate,
    branch,
    location,
    estTime,
    categories,
}) => {
    const { t } = useTranslation();

    const active = useSelector(({ favourites }) =>
        favourites.some((favouriteId) => favouriteId === id)
    );

    const dispatch = useDispatch();
    const handleFavouriteBtnPress = useCallback(() => {
        // Logic for make item in user's favourite list
        dispatch.favourites.toggle(id);
        console.log("Resturant " + name.en + " added to favourite list");
    });

    return (
        <View style={styles.container}>
            <View style={styles.startSection}>
                <Image style={styles.logo} source={logo} />
                <Rating rate={rate} />
            </View>
            <View style={styles.endSection}>
                <AppText style={styles.title} numberOfLines={1}>
                    {I18nManager.isRTL
                        ? `${name.ar} - ${branch.ar}`
                        : `${name.en} - ${branch.en}`}
                </AppText>
                <View style={styles.detialsSection}>
                    <View style={styles.location}>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            color={colors.primary}
                            size={12}
                            style={styles.icon}
                        />
                        <AppText style={styles.locationText}>
                            {location}
                        </AppText>
                    </View>
                    <View style={styles.duration}>
                        <FontAwesomeIcon
                            icon={faStopwatch}
                            color={colors.primary}
                            size={10}
                            style={styles.icon}
                        />
                        <AppText style={styles.estTime}>{`${estTime[0]} - ${
                            estTime[1]
                        } ${t("minute")}`}</AppText>
                    </View>
                </View>

                <View style={styles.categoriesSection}>
                    {categories.map((id) => (
                        <Category id={id} key={id} />
                    ))}
                </View>
            </View>
            <FavouriteButton
                style={styles.favBtn}
                active={active}
                onPress={handleFavouriteBtnPress}
            />
        </View>
    );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    favBtn: {
        position: "absolute",
        top: 0,
        end: 0,
    },
    categoriesSection: {
        marginTop: 10,
        flexDirection: "row",
    },
    duration: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.gray,
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 7,
        marginStart: 5,
    },
    estTime: {
        color: colors.secondary75,
        fontSize: 10,
    },
    detialsSection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    location: { flexDirection: "row", alignItems: "center" },
    icon: {
        marginEnd: 3,
    },
    locationText: {
        fontSize: 12,
        color: colors.secondary75,
        ...defaultStyle.textShadow,
    },
    title: {
        fontSize: 16,
        fontFamily: "Almarai_700Bold",
        ...defaultStyle.textShadow,
    },
    startSection: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderEndWidth: 1,
        borderEndColor: colors.border,
        alignItems: "center",
    },
    endSection: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        borderRadius: 10,
        ...defaultStyle.shadow,
    },
});
