import cakeImage from "src/resources/cake.jpg";
import drinkImage from "src/resources/drink.jpg";
import snacksImage from "src/resources/snack.jpg";
import soupImage from "src/resources/soup.jpg";
import stakeImage from "src/resources/stake.jpg";
import {
  CATEGORY_DESSERT_PAGE,
  CATEGORY_DRINKS_PAGE,
  CATEGORY_MAIN_DISHES_PAGE,
  CATEGORY_SNACKS_PAGE,
  CATEGORY_SOUP_PAGE,
} from "src/service/navigation-service";

export enum DishType {
  SOUP = "Sriuba",
  SNACK = "Užkandis",
  MAIN_DISH = "Pagrindinis patiekalas",
  DESSERT = "Desertas",
  DRINK = "Gėrimas",
}

export interface Category {
  category: DishType;
  icon: string;
  title: string;
  description: string;
  path: string;
}

export const categories: Category[] = [
  {
    category: DishType.MAIN_DISH,
    icon: stakeImage,
    title: "Pagrindiniai patiekalai",
    description:
      "Įvairūs mėsos, žuvies, bulvių ar daržovių pagrindiniai patiekalai. Galite rasti kepsnių, kotletų ar žuvies receptų.",
    path: CATEGORY_MAIN_DISHES_PAGE,
  },
  {
    category: DishType.SNACK,
    icon: snacksImage,
    title: "Užkandžiai",
    description:
      "Gardūs ir nesudėtingai paruošiamų užkandžių receptai. Galite rasti įvairių vieno kąsnio sumuštinių, karštų bei šaltų užkandžių receptų.",
    path: CATEGORY_SNACKS_PAGE,
  },
  {
    category: DishType.SOUP,
    icon: soupImage,
    title: "Sriubos",
    description:
      "Įvairių sriubų receptai, kurias pasigaminti neužtruksite, bet jos bus tikrai skanios. Galite rasti šaltų, karštų ar trintų sriubų receptus.",
    path: CATEGORY_SOUP_PAGE,
  },

  {
    category: DishType.DESSERT,
    icon: cakeImage,
    title: "Desertai",
    description:
      "Šita skiltis skirta smaližiams. Joje rasite įvarių tortų, pyragų, sausainių ir kitokių desertų receptus.",
    path: CATEGORY_DESSERT_PAGE,
  },
  {
    category: DishType.DRINK,
    icon: drinkImage,
    title: "Gėrimai",
    description:
      "Įvairūs kokteliai. Šioje skiltyje taip pat galite rasti įvairius glotnučių receptus.",
    path: CATEGORY_DRINKS_PAGE,
  },
];
