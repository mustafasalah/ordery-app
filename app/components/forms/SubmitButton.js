import React, { useCallback } from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import colors from "../../configs/colors";
import AnimatedLottieView from "lottie-react-native";

const SubmitButton = ({ children, style, icon, ...props }) => {
    const { handleSubmit, isSubmitting } = useFormikContext();
    const onSubmit = useCallback(() => {
        if (!isSubmitting) return handleSubmit();
    }, [handleSubmit, isSubmitting]);

    return (
        <AppButton
            onPress={onSubmit}
            style={[styles.submitButton, style]}
            icon={isSubmitting ? undefined : icon}
            {...props}
        >
            {isSubmitting ? (
                <AnimatedLottieView
                    style={{
                        width: 25,
                        height: 25,
                        alignSelf: "center",
                    }}
                    source={require("../../assets/lottie/loading.json")}
                    autoPlay
                />
            ) : (
                children
            )}
        </AppButton>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    submitButton: {
        marginTop: 30,
        width: 200,
        alignSelf: "center",
    },
});
