import PizzaIcon from "../assets/categories/pizza.svg";
import BurgerIcon from "../assets/categories/burger.svg";
import DessertIcon from "../assets/categories/banana-split.svg";
import FriedChickenIcon from "../assets/categories/fried-chicken.svg";
import ShawarmaIcon from "../assets/categories/shawarma.svg";
import FishIcon from "../assets/categories/fish.svg";
import SteakIcon from "../assets/categories/steak.svg";
import SpaghettiIcon from "../assets/categories/spaghetti.svg";
import DrinksIcon from "../assets/categories/boba.svg";
import FriesIcon from "../assets/categories/fries.svg";

import MiniShawarmaIcon from "../assets/categories/mini/shawarma.svg";
import MiniSteakIcon from "../assets/categories/mini/steak.svg";
import MiniFriesIcon from "../assets/categories/mini/fries.svg";
import {
    faBowlRice,
    faBurger,
    faDrumstickBite,
    faFishFins,
    faIceCream,
    faPizzaSlice,
    faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "./colors";

const iconSize = { width: 42, height: 42 };
const miniIconSize = { width: 10, height: 10 };

const categoriesConfig = {
    pizza: {
        icon: <PizzaIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faPizzaSlice}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#F6BE68",
    },
    burger: {
        icon: <BurgerIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon icon={faBurger} size={10} color={colors.primary} />
        ),
        color: "#A67F76",
    },
    dessert: {
        icon: <DessertIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faIceCream}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#B6DDEE",
    },
    chicken: {
        icon: <FriedChickenIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faDrumstickBite}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#E64042",
    },
    steak: {
        icon: <SteakIcon {...iconSize} />,
        miniIcon: <MiniSteakIcon {...miniIconSize} />,
        color: "#DADEE5",
    },
    fish: {
        icon: <FishIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faFishFins}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#A5B9C0",
    },
    shawarma: {
        icon: <ShawarmaIcon {...iconSize} />,
        miniIcon: <MiniShawarmaIcon {...miniIconSize} />,
        color: "#A14939",
    },
    asian: {
        icon: <SpaghettiIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faBowlRice}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#DFA361",
    },
    drinks: {
        icon: <DrinksIcon {...iconSize} />,
        miniIcon: (
            <FontAwesomeIcon
                icon={faMartiniGlassCitrus}
                size={10}
                color={colors.primary}
            />
        ),
        color: "#E2BEA1",
    },
    fries: {
        icon: <FriesIcon {...iconSize} />,
        miniIcon: <MiniFriesIcon {...miniIconSize} />,
        color: "#EBA75B",
    },
};

export default categoriesConfig;
