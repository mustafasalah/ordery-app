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
import FormField from "./forms/FormField";
import LocationsList from "./LocationsList";
import AppButton from "./AppButton";
import { useDispatch, useSelector } from "react-redux";
import Form from "./forms/Form";
import SubmitButton from "./forms/SubmitButton";

const LocationModal = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const selectedLocation = useSelector((state) => state.location.selected);
    const locationsList = useSelector((state) =>
        state.location.list.filter((location) =>
            location.label.startsWith(selectedLocation)
        )
    );
    const dispatch = useDispatch();

    const isValidLocation = useCallback(
        (location) => {
            return locationsList.some(({ label }) => label === location);
        },
        [locationsList, selectedLocation]
    );

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
                <Form
                    label={{
                        icon: faMapLocationDot,
                        content: t("delivery_destination"),
                    }}
                    initialValues={{ location: selectedLocation }}
                    onSubmit={({ location }) => {
                        // Submit selection logic
                        handleLocationSet(location);
                        // Close the modal
                        onClose();
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <>
                            <FormField
                                style={styles.field}
                                label={t("where_is_delivery")}
                                name="location"
                                icon={faMagnifyingGlassLocation}
                            />
                            <LocationsList
                                style={styles.list}
                                data={locationsList}
                                onSelect={(value) =>
                                    setFieldValue("location", value)
                                }
                                selectLocation={values.location}
                            />
                            <SubmitButton
                                icon={faCheck}
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor: isValidLocation(
                                            values.location
                                        )
                                            ? colors.primary
                                            : colors.secondary50,
                                    },
                                ]}
                            >
                                {t("confirm")}
                            </SubmitButton>
                        </>
                    )}
                </Form>
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
