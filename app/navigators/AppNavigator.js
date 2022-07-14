import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import tabBarNavigationOptions from "../configs/tabBarNavigatorOptions";
import BasketScreen from "../screens/BasketScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={tabBarNavigationOptions}
        >
            <Screen name="home" component={HomeScreen} />
            <Screen name="basket" component={BasketScreen} />
            <Screen name="discover" component={DiscoverScreen} />
            <Screen name="orders" component={OrdersScreen} />
            <Screen name="favourites" component={FavouritesScreen} />
        </Navigator>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secondary,
        ...defaultStyle.shadow,
    },
    tabBar: {
        backgroundColor: colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
});
