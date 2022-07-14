import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import colors from "./colors";
import defaultStyle from "./defaultStyle";
import i18next from "i18next";

const tabBarNavigationOptions = ({ navigation, route }) => ({
    headerStyle: styles.header,
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
                icon = <FontAwesome5 name="home" size={20} color={color} />;
                break;

            case "basket":
                icon = (
                    <FontAwesome
                        name="shopping-basket"
                        size={20}
                        color={color}
                    />
                );
                break;

            case "discover":
                icon = <FontAwesome5 name="utensils" size={20} color={color} />;
                break;

            case "orders":
                icon = <FontAwesome5 name="box-open" size={20} color={color} />;
                break;

            case "favourites":
                icon = <FontAwesome name="heart" size={20} color={color} />;
                break;
        }

        return <Text style={styles.tabBarIcon}>{icon}</Text>;
    },
});

export default tabBarNavigationOptions;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secondary,
        ...defaultStyle.shadow,
    },
    tabBar: {
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 65,
        paddingHorizontal: 10,
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
