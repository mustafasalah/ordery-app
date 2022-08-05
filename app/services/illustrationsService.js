import { I18nManager, StyleSheet } from "react-native";
import { t } from "i18next";

import Illustration1 from "../assets/illustration-1.svg";
import Illustration2 from "../assets/illustration-2.svg";
import Illustration3 from "../assets/illustration-3.svg";

const styles = StyleSheet.create({
    illustration: {
        marginTop: -50,
        width: 220,
        height: 220,
        resizeMode: "contain",
    },
});

let illustrations = [
    {
        illustration: (
            <Illustration1 style={styles.illustration} height={220} />
        ),
        title: t("welcome_head_1"),
        description: t("welcome_description_1"),
    },
    {
        illustration: (
            <Illustration2 style={styles.illustration} height={220} />
        ),
        title: t("welcome_head_2"),
        description: t("welcome_description_2"),
    },
    {
        illustration: (
            <Illustration3 style={styles.illustration} height={220} />
        ),
        title: t("welcome_head_3"),
        description: t("welcome_description_3"),
    },
];

const getWelcomeIllustrations = () => {
    if (I18nManager.isRTL) return [...illustrations].reverse();
    return illustrations;
};

export default getWelcomeIllustrations;
