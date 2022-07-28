import { StyleSheet, Image, View, I18nManager } from "react-native";
import React from "react";
import defaultStyle from "../configs/defaultStyle";
import colors from "../configs/colors";
import AppText from "./AppText";
import { useTranslation } from "react-i18next";
import DeliveryTime from "./DeliveryTime";
import AppButton from "./AppButton";

const MealsListItem = ({
    id,
    imageSrc,
    name,
    restaurant,
    deliveryEST,
    isNew,
}) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={imageSrc}
                    style={styles.image}
                    resizeMode="cover"
                />
                {isNew && <AppText style={styles.new}>{t("new")}</AppText>}
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <AppText style={styles.title}>{name["ar"]}</AppText>
                    <AppText style={styles.from}>
                        {t("from")} {restaurant["ar"]}
                    </AppText>
                    <DeliveryTime deliveryEST={deliveryEST} />
                </View>
                <AppButton style={styles.orderBtn}>{t("order_now")}</AppButton>
            </View>
        </View>
    );
};

export default MealsListItem;

const styles = StyleSheet.create({
    orderBtn: {
        fontSize: 13,
        paddingVertical: 4,
        paddingHorizontal: 16,
        alignSelf: "flex-start",
        marginTop: "auto",
    },
    infoContainer: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },
    from: {
        color: colors.secondary75,
        fontSize: 13,
    },
    title: {
        fontFamily: "Almarai_700Bold",
        fontSize: 16,
    },
    new: {
        position: "absolute",
        left: 8,
        top: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: colors.red,
        color: colors.white,
        fontFamily: "Almarai_700Bold",
        borderRadius: 15,
        ...defaultStyle.shadow,
    },
    imageContainer: {
        width: "45%",
    },
    container: {
        flexDirection: "row",
        marginHorizontal: 5,
        backgroundColor: colors.white,
        height: 140,
        marginBottom: 20,
        borderRadius: 10,
        ...defaultStyle.shadow,
    },
    image: {
        width: "100%",
        height: "100%",
        ["borderBottom" +
        (I18nManager.isRTL ? "Right" : "Left") +
        "Radius"]: 10,
        ["borderTop" + (I18nManager.isRTL ? "Right" : "Left") + "Radius"]: 10,
    },
});
