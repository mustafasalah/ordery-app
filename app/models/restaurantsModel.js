const restaurantsModel = {
    name: "restaurants",
    state: [
        {
            id: 1,
            name: {
                ar: "كنتاكي",
                en: "KFC",
            },
            branch: {
                ar: "شارع المطار",
                en: "Airport",
            },
            location: "الخرطوم, شارع المطار",
            estTime: [25, 45],
            categories: [1, 2, 3],
            rate: 4.5,
            logo: require("../assets/kfc.png"),
            recommended: true,
        },
        {
            id: 2,
            name: {
                ar: "بيتزا هـت",
                en: "PizzaHut",
            },
            branch: {
                ar: "شارع المشتل",
                en: "ALmashtal St",
            },
            location: "الخرطوم, شارع المشتل",
            estTime: [15, 35],
            categories: [1, 2, 3],
            rate: 4,
            logo: require("../assets/pizzahut.png"),
            recommended: true,
        },
        {
            id: 3,
            name: {
                ar: "فودبوينت",
                en: "FoodPoint",
            },
            logo: require("../assets/foodpoint.png"),
            recommended: true,
        },
        {
            id: 4,
            name: { ar: "ماكدونالدز", en: "Mcdonalds" },
            logo: require("../assets/mc.png"),
            recommended: true,
        },
        {
            id: 5,
            name: { ar: "ديبونيرز", en: "Debonairs" },
            logo: require("../assets/debonairs.png"),
            recommended: true,
        },
        {
            id: 6,
            name: { ar: "شيكانو", en: "Chicano" },
            logo: require("../assets/chicano.png"),
            recommended: true,
        },
    ],
    reducers: {},
    effects: {},
};

export default restaurantsModel;
