import { StyleSheet, View } from "react-native";
import Modal from "react-native-swipe-modal-up-down";
import layout from "../configs/layout";
import colors from "../configs/colors";
import React from "react";
import defaultStyle from "../configs/defaultStyle";

const FilterModal = ({ onClose, visible, children }) => {
    return (
        <Modal
            modalVisible={visible}
            ContentModal={
                <>
                    <View style={styles.topBar}></View>
                    <View style={styles.childrenContainer}>{children}</View>
                </>
            }
            onClose={onClose}
            ContentModalStyle={styles.content}
            MainContainerModal={styles.container}
        />
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    childrenContainer: {
        paddingTop: 15,
        paddingBottom: 30,
        paddingHorizontal: 15,
        flex: 1,
    },
    topBar: {
        marginTop: 15,
        backgroundColor: colors.border,
        height: 5,
        borderRadius: 5,
        width: 50,
        alignSelf: "center",
    },
    container: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
    },
    content: {
        backgroundColor: colors.white,
        position: "absolute",
        bottom: 0,
        left: layout.screenHorizontalPadding,
        right: layout.screenHorizontalPadding,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 2,
        borderColor: colors.border,
        ...defaultStyle.shadow,
    },
});
