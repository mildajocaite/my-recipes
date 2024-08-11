import { DishType } from "../category";
import { Recipe } from "../recipe";
import image from "src/resources/recipes/spinatu-tortas.png";

export const spinatuTortas: Recipe = {
  id: "spinatu-tortas",
  type: DishType.DESSERT,
  title: "Tortas su špinatais",
  description: "Tortas su špinatais ir maskorpone",
  duration: "1 val. 30 min.",
  numberOfServings: 6,
  ingredients: [
    {
      name: "",
      ingredients: [
        {
          amount: "250 g.",
          name: "špinatų lapai",
        },
        {
          amount: "3",
          name: "kiaušiniai",
        },
        {
          amount: "170 g.",
          name: "cukrus",
        },
        {
          amount: "2 a.š.",
          name: "vanilinis cukrus",
        },
        {
          amount: "125 g.",
          name: "aliejus",
        },
        {
          amount: "450 g.",
          name: "miltai",
        },
        {
          amount: "400 g.",
          name: "riebios grietinėlės",
        },
        {
          amount: "250 g.",
          name: "maskarponės sūris",
        },
        {
          amount: "3 v.š.",
          name: "cukraus pudra",
        },
        {
          amount: "2 pakeliai",
          name: "mėgstama želė",
        },
        {
          amount: "400 g.",
          name: "šviežios uogos",
        },
        {
          amount: "600 ml.",
          name: "vanduo",
        },
        {
          amount: "2 v.š.",
          name: "želatina",
        },
        {
          amount: "50-70 ml.",
          name: "vanduo",
        },
      ],
    },
  ],
  steps: [
    "Želė miltelius užpilti karštu vandeniu, ištirpinti, atvėsinti ir užpilti ant turimų uogų plonų sluoksniu pagal turimą formą.",
    "Kol želė stingsta, išsikepame biskvitą. Cukrų, vanilinį cukrų ir kiaušinius išplakti iki purumo. Aliejų su špinatų lapais sublenderuoti. Į kiaušinių masę supilti špinatus, suberti miltus ir kepimo miltelius. Viską gerai išmaišyti, supilti į norimą skardą (geriausia į tokią, kokį tortą formuosite). Kepti apie 35-40 min. 180 laipsnių temperatūroje.",
    "Grietinėlę, maskorponės sūrį ir cukraus pudrą išplakti iki purios masės. Supilame atvėsusią, ištripintą želatiną.",
    "Atvėsusiam biskvitui nupjauti viršūnę ir sutrupinti į trupinius (bus papuošimui). Ant biskvito dėti sustingusią želė",
    "Ant viršaus dedame kremo masę, biskvito trupinius ir laikome per naktį.",
    "Puošiame su šviežiomis uogomis.",
  ],
  image: image,
  mostPopular: true,
};
