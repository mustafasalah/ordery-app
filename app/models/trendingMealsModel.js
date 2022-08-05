const trendingMealsModel = {
    name: "trendingMeals",
    state: [
        {
            id: 1,
            imageSrc: require("../assets/image-1.jpg"),
            name: {
                ar: "ساندوتش الدجاج",
                en: "Chicken Sandwich",
            },
            restaurant: {
                ar: "دجاج كنتاكي",
                en: "KFC",
            },
            deliveryEST: [15, 35],
            isNew: true,
        },
        {
            id: 2,
            imageSrc: require("../assets/image-2.jpg"),
            name: {
                ar: "تريبل تريت بوكس",
                en: "Triple Treat Box",
            },
            restaurant: {
                ar: "بيتزا هت",
                en: "Pizza Hut",
            },
            deliveryEST: [40, 60],
            isNew: false,
        },
        {
            id: 3,
            imageSrc: require("../assets/image-3.jpg"),
            name: {
                ar: "تشيزي بوكت بيتزا",
                en: "Cheesy Pocket Pizza",
            },
            restaurant: {
                ar: "ديبونيرز",
                en: "Debonairs Pizza",
            },
            deliveryEST: [35, 55],
            isNew: false,
        },
        {
            id: 4,
            imageSrc: require("../assets/image-4.jpg"),
            name: {
                ar: "وجبة الكريسبي",
                en: "Crispy Meal",
            },
            restaurant: {
                ar: "فودبوينت",
                en: "Food Point",
            },
            deliveryEST: [20, 40],
            isNew: false,
        },
    ],
};

export default trendingMealsModel;
