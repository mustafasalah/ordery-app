const offersModel = {
    name: "offers",
    state: [
        {
            id: 1,
            uri: require("../assets/banner.png"),
        },
        {
            id: 2,
            uri: require("../assets/banner.png"),
        },
    ],
    reducers: {
        setOffers: (state, payload) => {
            return [...state, ...payload];
        },
    },
    effects: {},
};

export default offersModel;
