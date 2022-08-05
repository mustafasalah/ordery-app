import { init } from "@rematch/core";
import offersModel from "../models/offersModel";
import locationModel from "../models/locationModel";
import restaurantsModel from "../models/restaurantsModel";
import trendingMealsModel from "../models/trendingMealsModel";

const store = init({
    name: "Ordery App",
    models: {
        offers: offersModel,
        location: locationModel,
        restaurants: restaurantsModel,
        trendingMeals: trendingMealsModel,
    },
});

export default store;
