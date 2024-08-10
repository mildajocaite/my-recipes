import { Recipe } from "src/static/recipe";
import varskesTortas from "src/resources/recipes/nekeptas-varskes-tortas.jpg";
import { DishType } from "src/static/category";

export const nekeptasVarskesPyragas: Recipe = {
  id: "0",
  type: DishType.DESSERT,
  title: "Nekeptas varškės pyragas",
  description:
    "Šio torto kepti nereikia - užtenka turėti kantrybės laukiant, kol tortas sustings. Šis nekeptas varškės tortas yra paprastas, bet skanus ir gaivus.",
  duration: "1 val.",
  numberOfServings: 8,
  ingredients: [
    {
      name: "pagrindui",
      ingredients: [
        {
          amount: "360 g.",
          name: "šokoladiniai sausainiai",
        },
        {
          amount: "150 g.",
          name: "sviestas",
        },
      ],
    },
    {
      name: "kremui",
      ingredients: [
        {
          amount: "500 g.",
          name: "varškė",
        },
        {
          amount: "200 ml.",
          name: "grietinėlė",
        },
        {
          amount: "150 g.",
          name: "cukrus",
        },
        {
          amount: "35 g.",
          name: "želatina",
        },
        {
          amount: "100 ml.",
          name: "vanduo",
        },
      ],
    },
    {
      name: "papuošimui",
      ingredients: [
        {
          amount: "1 indelis",
          name: "konservuoti ananasai",
        },
        {
          amount: "1 pakelis",
          name: "vyšnių skonio želė",
        },
      ],
    },
  ],
  steps: [
    "Užpilkite želatiną vandeniu ir atidėkite į šalį, kad išbrinktų.",
    "Tuomet sausainius sumalkite su maišytuvu, supilkite ištirpintą sviestą, gerai išmaišykite.",
    "Tortinės dugną išklokite sviestiniu popieriumi bei tolygiai paskirstykite sausainių masę šiek tiek prispaudžiant. Dėkite į šaldytuvą, kol gaminsite kremą.",
    "Tada grietinėlę išplakite su cukrumi, sudėkite varškę bei gerai išmaišykite. Kadangi mano varškė buvo pakankamai rūgšti, todėl citrinos sulčių pilti nereikėjo. Į kremą supilkite ištirpintą bei atvėsintą želatiną.",
    "Gautą kremą supilame ant sausainių pagrindo bei dedame į šaldytuvą, kad sustingtų.",
    "Tortą papuošiame ananasais ir užpilame paruoštą ir atšaldytą vyšnių skonio želę. Dedame į šaldytuvą, kad sustingtų.",
  ],
  image: varskesTortas,
  mostPopular: true,
};
