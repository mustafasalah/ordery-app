import Constants from "expo-constants";
import { I18nManager, Platform } from "react-native";
import colors from "./colors";

const defaultStyle = {
    safeContainer: {
        flex: 1,
        marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
    appTextStyle: {
        fontFamily: "Almarai_400Regular",
        writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    },

    insetShadow: {
        shadowOffset: 0,
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 3,
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
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
    },
};

export default defaultStyle;
