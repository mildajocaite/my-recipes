import { Recipe } from "src/static/recipe";
import varskesTortas from "../../resources/recipes/nekeptas-varskes-tortas.jpg";
import { DishType } from "src/static/category";

export const nekeptasVarskesPyragas: Recipe = {
  id: "nekeptas-varskes-pyragas",
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
    "Užpilti želatiną vandeniu ir atidėti į šalį, kad išbrinktų.",
    "Tuomet sausainius sumalti su maišytuvu, supilti ištirpintą sviestą, gerai išmaišyti.",
    "Tortinės dugną iškloti sviestiniu popieriumi bei tolygiai paskirstyti sausainių masę šiek tiek prispaudžiant. Dėti į šaldytuvą, kol gaminsite kremą.",
    "Tada grietinėlę išplakite su cukrumi, sudėti varškę bei gerai išmaišyti. Kadangi mano varškė buvo pakankamai rūgšti, todėl citrinos sulčių pilti nereikėjo. Į kremą supilkite ištirpintą bei atvėsintą želatiną.",
    "Gautą kremą supilti ant sausainių pagrindo bei dėti į šaldytuvą, kad sustingtų.",
    "Tortą papuošti ananasais ir užpilti paruoštą ir atšaldytą vyšnių skonio želę. Dėti į šaldytuvą, kad sustingtų.",
  ],
  image: varskesTortas,
  mostPopular: true,
};
