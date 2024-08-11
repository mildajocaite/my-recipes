import { DishType } from "./category";
import { kauliukuTroskinys } from "./recipes/kauliuku-troskinys";
import { kibinai } from "./recipes/kibinai";
import { lazanija } from "./recipes/lazanija";
import { nekeptasVarskesPyragas } from "./recipes/nekeptas-varskes-pyragas";
import { prancuziskasPyragas } from "./recipes/prancuziskas-pyragas";
import { spinatuTortas } from "./recipes/spinatu-tortas";
import { suktinukaiSuLasisa } from "./recipes/suktinukai-su-lasisa";

export interface Recipe {
  id: string;
  type: DishType;
  title: string;
  description: string;
  numberOfServings: number;
  duration: string;
  ingredients: IngredientsGroup[];
  steps: string[];
  image: string;
  mostPopular: boolean;
}

export interface IngredientsGroup {
  name: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  amount: string;
  name: string;
}

export const recipes: Recipe[] = [
  nekeptasVarskesPyragas,
  spinatuTortas,
  prancuziskasPyragas,
  kauliukuTroskinys,
  kibinai,
  lazanija,
  suktinukaiSuLasisa
];
