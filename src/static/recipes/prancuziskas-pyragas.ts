import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/prancuziskas.jpg";
import { DishType } from "src/static/category";

export const prancuziskasPyragas: Recipe = {
  id: "1",
  type: DishType.DESSERT,
  title: "Prancūziškas varškės pyragas",
  description:
    "Labai greitai pagaminamas ir skanus pyragas. Šiam pyragui pagaminti reikia vos kelių ingredientų, kuriuos galite rasti šaldytuve.",
  duration: "30 min.",
  numberOfServings: 6,
  ingredients: [
    {
      name: "tešlai",
      ingredients: [
        {
          amount: "200 g.",
          name: "sviesto",
        },
        {
          amount: "2 šaukštai",
          name: "kakavos miltelių",
        },
        {
          amount: "2 stiklinės",
          name: "miltų",
        },
        {
          amount: "0.5 stiklinės",
          name: "cukraus",
        },
      ],
    },
    {
      name: "įdarui",
      ingredients: [
        {
          amount: "500 g.",
          name: "varškės",
        },
        {
          amount: "2 šaukšteliai",
          name: "vanilinio cukraus",
        },
        {
          amount: "4 vnt.",
          name: "kiaušinių",
        },
        {
          amount: "1 stiklinė",
          name: "cukraus",
        },
        {
          amount: "2 šaukštai",
          name: "cukraus",
        },
      ],
    },
  ],
  steps: [
    "Šaltą sviestą sutarkuokite, sumaišykite su cukrumi, kakavos milteliais ir miltais. Turi gautis biri masė.",
    "Įdarui sutrinkite varškę, vanilinį cukrų, grietinę, cukrų ir kiaušinius.",
    "Kepimo formą ištepkite sviestu, suberkite pusę miltų-kakavos-sviesto-cukraus mišinio, spaudžiant išlyginkite, ant jo užpilkite varškę, o ant viršaus vėl miltų-kakavos-sviesto-cukraus mišinį.",
    "Kepkite 190 laipsnių karštumo orkaitėje apie valandą.",
  ],
  image: image,
  mostPopular: false,
};
