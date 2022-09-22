import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import FilterModal from "./FilterModal";
import { useDispatch, useSelector } from "react-redux";
import {
    faBuildingLock,
    faFilter,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Form from "./forms/Form";
import DeliveryTimeField from "./forms/DeliveryTimeField";
import SelectionField from "./forms/SelectionField";
import SubmitButton from "./forms/SubmitButton";

const SearchFilterModal = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const searchFilter = useSelector((state) => state.filters.search);
    const handleModalClose = useCallback(
        () => dispatch.filters.toggle("search"),
        []
    );

    return (
        <FilterModal visible={searchFilter.visible} onClose={handleModalClose}>
            <Form
                initialValues={{ deliveryTime: "", status: "", rate: "" }}
                onSubmit={(values) => {
                    console.log(values);
                    handleModalClose();
                    return true;
                }}
            >
                <DeliveryTimeField />
                <SelectionField
                    label={t("status")}
                    labelIcon={faBuildingLock}
                    options={[
                        { label: t("all"), value: "" },
                        { label: t("opened"), value: "opened" },
                        { label: t("closed"), value: "closed" },
                    ]}
                    name="status"
                />
                <SelectionField
                    label={t("the_rate")}
                    labelIcon={faStarHalfAlt}
                    options={[
                        { label: t("all"), value: "" },
                        { label: t("4+"), value: "4" },
                        { label: t("3+"), value: "3" },
                        { label: t("2+"), value: "2" },
                        { label: t("1+"), value: "1" },
                    ]}
                    name="rate"
                />
                <SubmitButton style={{ width: "100%" }} icon={faFilter}>
                    {t("filter_results")}
                </SubmitButton>
            </Form>
        </FilterModal>
    );
};

export default SearchFilterModal;

const styles = StyleSheet.create({});
