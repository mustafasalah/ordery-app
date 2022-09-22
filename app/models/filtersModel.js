const filtersModel = {
    name: "filters",
    state: {
        search: {
            data: {},
            visible: false,
        },
        orders: {},
    },
    reducers: {
        toggle(state, modal) {
            return {
                ...state,
                [modal]: { ...state[modal], visible: !state[modal].visible },
            };
        },
    },
    effects: {},
};

export default filtersModel;
