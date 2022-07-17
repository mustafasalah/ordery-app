import { I18nManager, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faBasketShopping,
    faHeart,
    faBoxOpen,
    faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import layout from "../configs/layout";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import AppButton from "./AppButton";
import { t } from "i18next";
import MenuIcon from "../assets/menu-icon.svg";

const screenNameToIcon = new Map([
    ["basket", faBasketShopping],
    ["discover", faUtensils],
    ["orders", faBoxOpen],
    ["favourites", faHeart],
]);

const ScreenHeader = ({
    route,
    navigation,
    layout,
    options,
    startBtn,
    endBtn,
}) => {
    return (
        <View style={styles.header}>
            {startBtn ?? (
                <AppButton style={styles.headerBtns} noShadow>
                    <MenuIcon />
                </AppButton>
            )}

            <Text style={styles.title}>
                <FontAwesomeIcon
                    icon={screenNameToIcon.get(route.name)}
                    color={colors.primary}
                    size={16}
                />
                {"  "}
                {t(route.name)}
            </Text>

            {endBtn ?? (
                <AppButton
                    style={styles.headerBtns}
                    onPress={() => navigation.goBack()}
                    noShadow
                >
                    <FontAwesomeIcon
                        icon={I18nManager.isRTL ? faArrowLeft : faArrowRight}
                        size={20}
                        color={colors.primary}
                    />
                </AppButton>
            )}
        </View>
    );
};

export default ScreenHeader;

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "Almarai_700Bold",
    },
    headerBtns: {
        backgroundColor: "transparent",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: layout.safeStatusbarHeight + 10,
        marginHorizontal: layout.screenHorizontalPadding,
        backgroundColor: colors.secondary,
        paddingVertical: 12,
        borderRadius: 15,
        ...defaultStyle.shadow,
    },
});
