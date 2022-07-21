import {
    StyleSheet,
    Image,
    useWindowDimensions,
    View,
    I18nManager,
} from "react-native";
import React, { useRef, useState } from "react";
import colors from "../configs/colors";
import Carousel, { Pagination } from "react-native-snap-carousel";
import layout from "../configs/layout";
import { Shadow } from "react-native-shadow-2";
import defaultStyle from "../configs/defaultStyle";

const OffersSlider = () => {
    const sliders = useRef([
        require("../assets/banner.png"),
        require("../assets/banner.png"),
    ]);
    const carousel = useRef();
    const { width: windowWidth } = useWindowDimensions();
    const carouselWidth = windowWidth - layout.screenHorizontalPadding * 2;
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View>
            <Carousel
                ref={carousel}
                sliderWidth={carouselWidth}
                itemWidth={carouselWidth}
                data={
                    I18nManager.isRTL
                        ? sliders.current.reverse()
                        : sliders.current
                }
                onSnapToItem={(index) => setActiveSlide(index)}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                ...defaultStyle.shadow,
                            }}
                        >
                            <Image
                                style={styles.sliderImage}
                                source={item}
                                resizeMode="contain"
                            />
                        </View>
                    );
                }}
                loop
                autoplay
            />

            <Pagination
                dotsLength={sliders.current.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    paddingVertical: 15,
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    borderWidth: 3,
                    marginHorizontal: -3,
                    borderColor: colors.primary,
                    backgroundColor: colors.primary,
                }}
                inactiveDotStyle={{
                    backgroundColor: colors.gray,
                    borderColor: colors.border,
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        </View>
    );
};

export default OffersSlider;

const styles = StyleSheet.create({
    sliderImage: {
        width: "100%",
        height: null,
        aspectRatio: 2.3,
        borderRadius: 10,
    },
});
