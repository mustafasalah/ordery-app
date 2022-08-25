import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import tabBarNavigationOptions from "../configs/tabBarNavigatorOptions";
import BasketScreen from "../screens/BasketScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { useSelector } from "react-redux";
import DeliveryLocationScreen from "../screens/DeliveryLocationScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
    // Check if the delivery location is set first or not
    const selectedLocation = useSelector((state) => state.location.selected);
    if (selectedLocation === "") {
        return <DeliveryLocationScreen />;
    }

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={tabBarNavigationOptions}
        >
            <Screen
                name="home"
                component={HomeScreen}
                options={{ header: HomeHeader }}
            />
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
