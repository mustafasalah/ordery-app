import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    );
};

export default AppNavigator;
