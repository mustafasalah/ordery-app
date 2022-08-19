import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext } from "react";
import OptionContext from "../../context/OptionContext";
import { useFormikContext } from "formik";
import AppText from "../AppText";
import colors from "../../configs/colors";
import { useTranslation } from "react-i18next";
import InsetShadow from "react-native-inset-shadow";
import defaultStyle from "../../configs/defaultStyle";

const RadioOption = ({ value, children }) => {
    const fieldName = useContext(OptionContext);
    const { setFieldValue, values } = useFormikContext();
    const handlePress = useCallback(
        () => setFieldValue(fieldName, value),
        [value, fieldName]
    );
    const { t } = useTranslation();

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <InsetShadow
                containerStyle={styles.option}
                {...defaultStyle.insetShadow}
            >
                <View
                    style={[
                        styles.circle,
                        values[fieldName] === value
                            ? {
                                  backgroundColor: colors.primary,
                              }
                            : undefined,
                    ]}
                ></View>
            </InsetShadow>
            <AppText>{t(children)}</AppText>
        </Pressable>
    );
};

export default RadioOption;

const styles = StyleSheet.create({
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
