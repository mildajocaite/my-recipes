import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/troskinys.png";
import { DishType } from "src/static/category";

export const kauliukuTroskinys: Recipe = {
  id: "kiaulienos-troskinys",
  type: DishType.MAIN_DISH,
  title: "Vieno puodo troškinys",
  description:
    "Labai paprastai paruošiamas ir skanus kiaulienos kauliukų troškinys",
  duration: "30 min.",
  numberOfServings: 6,
  ingredients: [
    {
      name: "",
      ingredients: [
        {
          amount: "800 g.",
          name: "kiaulienos kauliukai",
        },
        {
          amount: "3",
          name: "svogūnai",
        },
        {
          amount: "2 didelės",
          name: "morkos",
        },
        {
          amount: "1 galvutė",
          name: "česnakas",
        },
        {
          amount: "5",
          name: "bulvės",
        },
        {
          amount: "500 ml.",
          name: "verdantis vanduo",
        },
        {
          amount: "3 šaukštai",
          name: "pomidorų padažas",
        },
      ],
    },
  ],
  steps: [
    "Kauliukus susipjaustyti ir pamarinuoti su druska ir pipirais. Palikti per naktį šaldytuve.",
    "Keptuvėje ar troškintuve įsikaitinti aliejų ir jame gerai apsikepti kauliukus.",
    "Toje pačioje keptuvėje pakepinti svogūnus bei morką. Ant jų dėti kauliukus, česnako galvą, užpilti verdančiu vandeniu, paskaninti druską, pipirais bei daržovių sultiniu. Uždengus troškinti apie 30 min.",
    "Po pusvalandžio troškinimo sudėti bulves, įdėti pomidorų padažo, paskaninti druska ir leisti uždengus troškintis, kol bulvės užvirs. Kai išsitroškins, išspausti česnako skiltelę, paskaninti šviežiais krapais bei svogūnų laiškais.",
  ],
  image: image,
  mostPopular: true,
};
