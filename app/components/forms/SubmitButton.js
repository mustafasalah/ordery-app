import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const SubmitButton = ({ children, style, ...props }) => {
    const { handleSubmit, isInitialValid, isValid } = useFormikContext();
    return (
        <AppButton
            onPress={handleSubmit}
            style={[
                styles.submitButton,
                // {
                //     backgroundColor:
                //         isInitialValid && isValid
                //             ? colors.primary
                //             : colors.secondary75,
                // },
                style,
            ]}
            {...props}
        >
            {children}
        </AppButton>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    submitButton: { marginTop: 30, width: 200, alignSelf: "center" },
});
