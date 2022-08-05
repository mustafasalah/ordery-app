import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} />
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    container: { alignItems: "center", marginTop: 20 },
});
