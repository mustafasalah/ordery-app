import Constants from "expo-constants";
import { I18nManager } from "react-native";
import colors from "./colors";
import layout from "./layout";

const defaultStyle = {
    safeContainer: {
        marginTop: Constants.statusBarHeight,
        paddingTop: 10,
        paddingHorizontal: layout.screenHorizontalPadding,
    },
    appTextStyle: {
        fontFamily: "Almarai_400Regular",
        writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    },
    primaryBtn: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize: 16,
        fontFamily: "Almarai_800ExtraBold",
        paddingVertical: 8,
        paddingHorizontal: 20,
        textAlign: "center",
    },
    textShadow: {
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
    },
    lightShadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
};

export default defaultStyle;
