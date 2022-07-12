import Constants from "expo-constants";
import layout from "./layout";
import i18n from "../configs/translation";

const defaultStyle = {
    safeContainer: {
        marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        paddingTop: 10,
        paddingHorizontal: layout.screenHorizontalPadding,
    },
    appTextStyle: {
        fontFamily: "Almarai_400Regular",
        writingDirection: "rtl",
    },
};

export default defaultStyle;
