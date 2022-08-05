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
import defaultStyle from "../configs/defaultStyle";
import { useSelector } from "react-redux";

const OffersSlider = () => {
    const sliders = useSelector((state) => state.offers);
    const carousel = useRef();
    const { width: windowWidth } = useWindowDimensions();
    const carouselWidth = windowWidth;
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={styles.container}>
            <Carousel
                ref={carousel}
                sliderWidth={carouselWidth}
                itemWidth={carouselWidth}
                data={I18nManager.isRTL ? sliders.reverse() : sliders}
                onSnapToItem={(index) => setActiveSlide(index)}
                slideStyle={styles.slideWrapper}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.slide}>
                            <Image
                                style={styles.sliderImage}
                                source={item.uri}
                                resizeMode="contain"
                            />
                        </View>
                    );
                }}
                autoplayInterval={6000}
                loop
                autoplay
            />

            <Pagination
                dotsLength={sliders.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.pagination}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        </View>
    );
};

export default OffersSlider;

const styles = StyleSheet.create({
    container: {
        marginStart: -layout.screenHorizontalPadding,
    },
    slideWrapper: {
        paddingHorizontal: layout.screenHorizontalPadding,
        paddingTop: 5,
        paddingBottom: 10,
    },
    slide: {
        borderRadius: 10,
        ...defaultStyle.shadow,
    },
    sliderImage: {
        width: "100%",
        height: null,
        aspectRatio: 2.3,
        borderRadius: 10,
    },
    pagination: {
        paddingTop: 5,
        paddingBottom: 0,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        borderWidth: 3,
        marginHorizontal: -3,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
    },
    paginationInactiveDot: {
        backgroundColor: colors.gray,
        borderColor: colors.border,
    },
});
