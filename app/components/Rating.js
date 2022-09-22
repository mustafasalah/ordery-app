import { I18nManager, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faStar as faStarSolid,
    faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import colors from "../configs/colors";

const Rating = ({ rate }) => {
    const printRating = useCallback(() => {
        const stars = [];
        let i = 0;
        for (; i < Math.floor(rate); i++) {
            stars[i] = (
                <FontAwesomeIcon
                    key={i}
                    size={12}
                    icon={faStarSolid}
                    color={colors.yellow}
                />
            );
        }
        if (Math.round(rate) !== rate)
            stars[i] = (
                <FontAwesomeIcon
                    key={i++}
                    size={12}
                    icon={faStarHalfStroke}
                    color={colors.yellow}
                    style={{
                        transform: [
                            { rotateY: I18nManager.isRTL ? "180deg" : "0deg" },
                        ],
                    }}
                />
            );
        for (; i < 5; i++) {
            stars[i] = (
                <FontAwesomeIcon
                    key={i}
                    size={12}
                    icon={faStarRegular}
                    color={colors.yellow}
                />
            );
        }

        return stars;
    }, [rate]);

    return <View style={{ flexDirection: "row" }}>{printRating()}</View>;
};

export default Rating;

const styles = StyleSheet.create({});
