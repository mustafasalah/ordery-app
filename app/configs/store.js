import { init } from "@rematch/core";
import offersModel from "../models/offersModel";
import locationModel from "../models/locationModel";
import restaurantsModel from "../models/restaurantsModel";

const store = init({
    name: "Ordery App",
    models: {
        offers: offersModel,
        location: locationModel,
        restaurants: restaurantsModel,
    },
});

export default store;
