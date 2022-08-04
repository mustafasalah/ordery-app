import { init } from "@rematch/core";
import offersModel from "../models/offersModel";
import locationModel from "../models/locationModel";

const store = init({
    name: "Ordery App",
    models: {
        offers: offersModel,
        location: locationModel,
    },
});

export default store;
