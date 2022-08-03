import { init } from "@rematch/core";
import locationModel from "../models/locationModel";

const store = init({
    models: {
        location: locationModel,
    },
});

export default store;
