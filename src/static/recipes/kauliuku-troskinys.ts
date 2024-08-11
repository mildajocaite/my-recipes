import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/troskinys.png";
import { DishType } from "src/static/category";

export const kauliukuTroskinys: Recipe = {
  id: "2",
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
    "Kauliukus susipjaustyti ir pamarinuoti su druska ir pipirais. Geriausia palikti per naktį šaldytuve.",
    "Keptuvėje ar troškintuve įsikaitinti aliejų ir jame gerai apsikepti kauliukus. Atsidėti į šoną.",
    "Toje pačioje keptuvėje pakepinti svogūnus bei morką. Ant jų dėti kauliukus, česnako galvą, užpilti verdančiu vandeniu, paskaninti druską, pipirais bei daržovių sultiniu ir uždengus troškinti kokias 30 min.",
    "Po pusvalandžio troškinimo sudėti bulves, išspausti pomidorų padažo, paskaninti vėl viską uždengus druska ir leisti uždengus troškintis, kol bulvės užvirs. Kai išsitroškins išspausti česnako skiltelę, paskaninti šviežiais krapais bei svogūnų laiškais.",
  ],
  image: image,
  mostPopular: true,
};
