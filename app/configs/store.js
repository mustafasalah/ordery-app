import { init } from "@rematch/core";
import offersModel from "../models/offersModel";
import locationModel from "../models/locationModel";
import restaurantsModel from "../models/restaurantsModel";
import trendingMealsModel from "../models/trendingMealsModel";
import categoriesModel from "../models/categoriesModel";
import favouritesModel from "../models/favouritesModel";
import filtersModel from "../models/filtersModel";

const store = init({
    name: "Ordery App",
    models: {
        filters: filtersModel,
        favourites: favouritesModel,
        categories: categoriesModel,
        offers: offersModel,
        location: locationModel,
        restaurants: restaurantsModel,
        trendingMeals: trendingMealsModel,
    },
});

export default store;
