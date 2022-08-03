import { Modal, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import colors from "../configs/colors";
import defaultStyle from "../configs/defaultStyle";
import layout from "../configs/layout";
import FormLabel from "./FormLabel";
import { useTranslation } from "react-i18next";
import {
    faCheck,
    faMagnifyingGlassLocation,
    faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "./forms/TextField";
import LocationsList from "./LocationsList";
import AppButton from "./AppButton";
import { useDispatch, useSelector } from "react-redux";

const LocationModal = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const selectedLocation = useSelector((state) => state.location.selected);
    const locationsList = useSelector((state) =>
        state.location.list.filter((location) =>
            location.label.startsWith(selectedLocation)
        )
    );
    const dispatch = useDispatch();

    const isValidLocation = useCallback(() => {
        return locationsList.some(({ label }) => label === selectedLocation);
    }, [locationsList, selectedLocation]);

    const handleLocationSet = useCallback((location) =>
        dispatch.location.set(location)
    );

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            transparent
        >
            <View style={styles.modal}>
                <FormLabel icon={faMapLocationDot}>
                    {t("delivery_destination")}
                </FormLabel>
                <TextField
                    style={styles.field}
                    label={t("where_is_delivery")}
                    icon={faMagnifyingGlassLocation}
                    value={selectedLocation}
                    onChangeText={handleLocationSet}
                />
                <LocationsList
                    style={styles.list}
                    data={locationsList}
                    onSelect={handleLocationSet}
                    selectLocation={selectedLocation}
                />
                <AppButton
                    icon={faCheck}
                    style={[
                        styles.button,
                        {
                            backgroundColor: isValidLocation()
                                ? colors.primary
                                : colors.secondary50,
                        },
                    ]}
                    onPress={() => {
                        // Submit selection logic

                        // Close the modal
                        onClose();
                    }}
                >
                    {t("confirm")}
                </AppButton>
            </View>
        </Modal>
    );
};

export default LocationModal;

const styles = StyleSheet.create({
    button: {
        marginVertical: 30,
        alignSelf: "center",
        width: 200,
    },
    list: {
        marginTop: 30,
    },
    field: {
        marginTop: 25,
        paddingHorizontal: layout.screenHorizontalPadding,
    },
    modal: {
        flex: 1,
        overflow: "hidden",
        marginHorizontal: layout.screenHorizontalPadding,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: colors.white,
        marginTop: 70,
        ...defaultStyle.shadow,
    },
});
