import { I18nManager, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback } from "react";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Form from "./forms/Form";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
    const { t } = useTranslation();

    return (
        <Form
            initialValues={{ search: "" }}
            onSubmit={() => {
                console.log("search!");
            }}
            style={styles.box}
        >
            {({ setFieldValue, handleBlur, values, touched, errors }) => {
                return (
                    <>
                        <TextInput
                            style={styles.searchField}
                            placeholder={t(
                                "search_with_category_or_restaurants"
                            )}
                            placeholderTextColor={colors.secondary50}
                            onChangeText={(searchValue) => {
                                setFieldValue("search", searchValue);

                                // filter logic here...
                            }}
                            onBlur={handleBlur("search")}
                            value={values["search"]}
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            color={colors.primary}
                        />
                    </>
                );
            }}
        </Form>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    searchField: {
        marginEnd: 10,
        flex: 1,
        fontFamily: "Almarai_400Regular",
        fontSize: 16,
        color: colors.secondary75,
        textAlign: I18nManager.isRTL ? "right" : "left",
    },
    box: {
        flex: 0,
        marginTop: 25,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        ...defaultStyle.lightShadow,
    },
});
