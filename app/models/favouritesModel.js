const favouritesModel = {
    name: "favourites",
    state: [1, 3, 5],
    reducers: {
        toggle(state, id) {
            if (!state.includes(id)) return [...state, id];
            state.splice(state.indexOf(id), 1);
            return state;
        },
    },
    effects: {},
};

export default favouritesModel;
