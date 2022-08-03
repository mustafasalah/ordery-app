import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "../assets/menu-icon.svg";
import AppButton from "./AppButton";
import colors from "../configs/colors";
import layout from "../configs/layout";
import defaultStyle from "../configs/defaultStyle";
import { useDispatch } from "react-redux";

const HomeHeader = ({ navigation, route, options }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.header}>
            <AppButton style={styles.headerBtns} noShadow>
                <MenuIcon />
            </AppButton>
            <Image
                style={styles.logo}
                source={require("../assets/dark-logo.png")}
                resizeMode="contain"
            />
            <AppButton
                style={styles.headerBtns}
                onPress={() => dispatch.location.showModal()}
                noShadow
            >
                <FontAwesomeIcon
                    icon={faMapLocationDot}
                    size={20}
                    color={colors.primary}
                />
            </AppButton>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    headerBtns: {
        backgroundColor: "transparent",
    },
    logo: {
        height: 35,
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
