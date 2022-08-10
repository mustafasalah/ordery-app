import { StyleSheet, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import FormLabel from "../FormLabel";

const Form = ({
    initialValues,
    onSubmit,
    validate,
    validationSchema,
    children,
    style,
    label,
    ...props
}) => {
    return (
        <>
            {label && <FormLabel icon={label.icon}>{label.content}</FormLabel>}
            <View style={[styles.container, style]}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validate={validate}
                    validationSchema={validationSchema}
                    {...props}
                >
                    {typeof children === "function" ? (
                        children
                    ) : (
                        <>{children}</>
                    )}
                </Formik>
            </View>
        </>
    );
};

export default Form;

const styles = StyleSheet.create({ container: { flex: 1 } });
