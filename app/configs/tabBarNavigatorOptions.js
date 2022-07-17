import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text } from "react-native";
import colors from "./colors";
import defaultStyle from "./defaultStyle";
import i18next from "i18next";
import {
    faBasketShopping,
    faHeart,
    faBoxOpen,
    faHouseChimney,
    faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import ScreenHeader from "../components/ScreenHeader";

const tabBarNavigationOptions = ({ navigation, route }) => ({
    header: (props) => <ScreenHeader {...props} />,
    tabBarStyle: styles.tabBar,
    tabBarActiveTintColor: colors.primary75,
    tabBarInactiveTintColor: colors.secondary50,
    tabBarLabel: ({ focused, color }) => {
        return <Text style={styles.tabBarLabel}>{i18next.t(route.name)}</Text>;
    },
    tabBarIcon: ({ size, focused, color }) => {
        let icon;
        switch (route.name) {
            case "home":
                icon = (
                    <FontAwesomeIcon
                        icon={faHouseChimney}
                        size={20}
                        color={color}
                    />
                );
                break;

            case "basket":
                icon = (
                    <FontAwesomeIcon
                        icon={faBasketShopping}
                        size={20}
                        color={color}
                    />
                );
                break;

            case "discover":
                icon = (
                    <FontAwesomeIcon
                        icon={faUtensils}
                        size={20}
                        color={color}
                    />
                );
                break;

            case "orders":
                icon = (
                    <FontAwesomeIcon icon={faBoxOpen} size={20} color={color} />
                );
                break;

            case "favourites":
                icon = (
                    <FontAwesomeIcon icon={faHeart} size={20} color={color} />
                );
                break;
        }

        return <Text style={styles.tabBarIcon}>{icon}</Text>;
    },
});

export default tabBarNavigationOptions;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 65,
        paddingHorizontal: 10,
        position: "absolute",
        ...defaultStyle.shadow,
    },
    tabBarIcon: {
        marginTop: 12,
        ...defaultStyle.textShadow,
    },
    tabBarLabel: {
        color: colors.secondary,
        fontSize: 12,
        fontFamily: "Almarai_700Bold",
        marginBottom: 10,
    },
});
