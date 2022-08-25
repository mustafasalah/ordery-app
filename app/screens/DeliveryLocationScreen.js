import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthScreen from "../components/AuthScreen";
import LocationModal from "../components/LocationModal";
import { useNavigation } from "@react-navigation/native";

const DeliveryLocationScreen = () => {
    const navigation = useNavigation();
    return (
        <AuthScreen noScrollView withoutWrapper>
            <LocationModal
                style={styles.modal}
                onClose={() => {
                    navigation.navigate("app");
                }}
            />
        </AuthScreen>
    );
};

export default DeliveryLocationScreen;

const styles = StyleSheet.create({
    modal: {
        marginTop: 90,
    },
});
