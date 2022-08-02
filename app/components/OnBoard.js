import React, { useState, useRef } from "react";
import { StyleSheet, View, I18nManager } from "react-native";
import AppText from "../components/AppText";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import Illustration1 from "../assets/illustration-1.svg";
import Illustration2 from "../assets/illustration-2.svg";
import Illustration3 from "../assets/illustration-3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const OnBoard = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const carousel = useRef();
    const [activeIllustration, setActiveIllustration] = useState(0);
    const illustrations = useRef([
        {
            illustration: (
                <Illustration1 style={styles.illustration} height={220} />
            ),
            title: t("welcome_head_1"),
            description: t("welcome_description_1"),
        },
        {
            illustration: (
                <Illustration2 style={styles.illustration} height={220} />
            ),
            title: t("welcome_head_2"),
            description: t("welcome_description_2"),
        },
        {
            illustration: (
                <Illustration3 style={styles.illustration} height={220} />
            ),
            title: t("welcome_head_3"),
            description: t("welcome_description_3"),
        },
    ]);

    return (
        <View style={styles.container}>
            <View>
                <Carousel
                    ref={carousel}
                    itemWidth={360}
                    sliderWidth={360}
                    onSnapToItem={(index) => setActiveIllustration(index)}
                    data={
                        I18nManager.isRTL
                            ? illustrations.current.reverse()
                            : illustrations.current
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.illustrationContainer}>
                                {item.illustration}
                                <AppText
                                    style={styles.headText}
                                    numberOfLines={2}
                                >
                                    {item.title}
                                </AppText>
                                <AppText
                                    style={styles.descriptionText}
                                    numberOfLines={3}
                                >
                                    {item.description}
                                </AppText>
                                <Pagination
                                    dotsLength={illustrations.current.length}
                                    activeDotIndex={activeIllustration}
                                    containerStyle={{
                                        position: "absolute",
                                        bottom: 5,
                                    }}
                                    dotStyle={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: 3,
                                        marginHorizontal: -3,
                                        backgroundColor: colors.primary,
                                    }}
                                    inactiveDotStyle={{
                                        backgroundColor: colors.white,
                                    }}
                                    inactiveDotOpacity={1}
                                    inactiveDotScale={1}
                                />
                            </View>
                        );
                    }}
                />
            </View>
            <View style={styles.btnsContainer}>
                <AppButton
                    style={[styles.navigationBtns, styles.skipBtn]}
                    textStyle={[styles.navigationTextBtns, styles.skipTextBtn]}
                    noShadow
                >
                    {t("skip")}
                </AppButton>
                <AppButton
                    style={[styles.navigationBtns, styles.nextBtn]}
                    textStyle={[styles.navigationTextBtns, styles.nextTextBtn]}
                    onPress={() => {
                        if (
                            activeIllustration <
                            illustrations.current.length - 1
                        ) {
                            carousel.current.snapToNext();
                        } else {
                            // Go to Home Screen
                            navigation.navigate("app");
                        }
                    }}
                    noShadow
                >
                    {activeIllustration >= illustrations.current.length - 1
                        ? t("start")
                        : t("next")}
                    {"  "}
                    <FontAwesomeIcon
                        icon={I18nManager.isRTL ? faAngleLeft : faAngleRight}
                        size={20}
                        color={colors.primary}
                    />
                </AppButton>
            </View>
        </View>
    );
};

export default OnBoard;

const styles = StyleSheet.create({
    navigationBtns: {
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    navigationTextBtns: {
        fontSize: 18,
    },
    nextBtn: {
        paddingStart: 20,
    },
    nextTextBtn: {
        color: colors.primary,
    },
    skipBtn: {
        paddingEnd: 20,
    },
    skipTextBtn: {
        color: colors.secondary75,
        fontFamily: "Almarai_700Bold",
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionText: {
        textAlign: "center",
        color: colors.white,
        fontSize: 16,
        lineHeight: 28,
        marginTop: 10,
        paddingHorizontal: "12%",
    },
    headText: {
        textAlign: "center",
        lineHeight: 32,
        color: colors.primary,
        fontSize: 20,
        fontFamily: "Almarai_800ExtraBold",
        marginTop: 15,
        paddingHorizontal: 10,
    },
    illustrationContainer: {
        aspectRatio: 1,
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 400,
        alignItems: "center",
        paddingBottom: 50,
        marginTop: 50,
        marginBottom: 20,
        ...defaultStyle.shadow,
    },
    illustration: {
        marginTop: -50,
        width: 220,
        height: 220,
        resizeMode: "contain",
    },
});
