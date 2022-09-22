import { StyleSheet } from "react-native";
import AppButton from "./AppButton";
import React from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../configs/colors";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const FilterButton = ({ type }) => {
    const dispatch = useDispatch();
    const handlePress = useCallback(() => {
        dispatch.filters.toggle(type);
    }, [type]);

    return (
        <AppButton style={styles.btn} onPress={handlePress} noShadow>
            <FontAwesomeIcon icon={faFilter} size={16} color={colors.primary} />
        </AppButton>
    );
};

export default FilterButton;

const styles = StyleSheet.create({ btn: { backgroundColor: "transparent" } });
