import { Pressable, StyleSheet, View } from "react-native";
import React, { useCallback, useContext } from "react";
import OptionContext from "../../context/OptionContext";
import { useFormikContext } from "formik";
import AppText from "../AppText";
import colors from "../../configs/colors";
import InsetShadow from "react-native-inset-shadow";
import defaultStyle from "../../configs/defaultStyle";

const RadioOption = ({ value, children, buttonStyle }) => {
    const fieldName = useContext(OptionContext);
    const { setFieldValue, values } = useFormikContext();
    const handlePress = useCallback(() => {
        return setFieldValue(fieldName, value);
    }, [value, fieldName]);

    const isActive = values[fieldName] === value;

    return (
        <Pressable
            style={[
                styles.container,
                buttonStyle ? { marginEnd: 15 } : undefined,
            ]}
            onPress={handlePress}
        >
            {buttonStyle ? (
                <View
                    style={[
                        styles.btn,
                        isActive ? styles.activeBtn : undefined,
                    ]}
                >
                    <AppText style={[isActive ? styles.active : undefined]}>
                        {children}
                    </AppText>
                </View>
            ) : (
                <>
                    <InsetShadow
                        containerStyle={styles.option}
                        {...defaultStyle.insetShadow}
                    >
                        <View
                            style={[
                                styles.circle,
                                isActive
                                    ? {
                                          backgroundColor: colors.primary,
                                      }
                                    : undefined,
                            ]}
                        ></View>
                    </InsetShadow>
                    <AppText>{children}</AppText>
                </>
            )}
        </Pressable>
    );
};

export default RadioOption;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.gray,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 25,
    },
    activeBtn: {
        backgroundColor: colors.primary,
        borderWidth: 0,
        ...defaultStyle.lightShadow,
    },
    active: {
        color: colors.white,
        fontFamily: "Almarai_800ExtraBold",
    },
    container: {
        flexDirection: "row",
        marginEnd: 25,
    },
    option: {
        marginEnd: 8,
        borderRadius: 10,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "transparent",
        backgroundColor: colors.gray,
    },
});
