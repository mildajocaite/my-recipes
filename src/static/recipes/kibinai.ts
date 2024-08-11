import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/kibinai.png";
import { DishType } from "src/static/category";

export const kibinai: Recipe = {
  id: "kibinai",
  type: DishType.MAIN_DISH,
  title: "Naminiai kibinai",
  description: "Naminiai kibinai su kiauliena",
  duration: "30 min.",
  numberOfServings: 12,
  ingredients: [
    {
      name: "tešlai",
      ingredients: [
        {
          amount: "350 g.",
          name: "miltai",
        },
        {
          amount: "200 g.",
          name: "šaltas sviestas",
        },
        {
          amount: "žiupsnelis",
          name: "druska",
        },
        {
          amount: "160 ml.",
          name: "30% reibuvo grietinė",
        },
        {
          amount: "2",
          name: "kiaušiniai",
        },
      ],
    },
    {
      name: "įdarui",
      ingredients: [
        {
          amount: "400-450 g.",
          name: "kiaulienos sprandinė",
        },
        {
          amount: "1",
          name: "raudonasis svogūnas",
        },
        {
          amount: "2",
          name: "porai",
        },
        {
          amount: "žiupsnelis",
          name: "džiovinti smulkinti lauro lapai",
        },
        {
          amount: "žiupsnelis",
          name: "malti juodieji pipirai",
        },
        {
          amount: "žiupsnelis",
          name: "druska",
        },
        {
          amount: "ryšelis",
          name: "krapai",
        },
        {
          amount: "ryšelis",
          name: "petražolių",
        },
        {
          amount: "2 val. šaukštai",
          name: "30% riebumo grietinės",
        },
      ],
    },
  ],
  steps: [
    "Miltus suberti į dubenį ir įtarkuoti į juos šaltą sviestą.",
    "Įtarkuotą sviestą šiek tiek pasmulkinti pirštais, kol sviestas visiškai susimaišys su miltais ir šis mišinys taps panašus į trupinius.",
    "Į sviesto ir miltų trupinius būtinai įdėti keletą žiupsnelių druskos ir išmaišyti šaukštu.",
    "Kiaušinį suplakti su grietine ir supilti į tešlą.",
    "Viską suspausti į vieną tešlos gabalą, porą kartų paminkyti, bet neperminkyti, kad tešla netaptų per kieta.",
    "Duoti tešlai pailsėti šaldytuve apie valandą.",
    "Kiaulieną supjaustyti nedideliais kubeliais.",
    "Itin smulkiai sukapoti svogūną ir griežinėliais pasmulkinti porus. Įmaišyti į mėsą.",
    "Įberti porą žiupsnelių smulkintų lauro lapų, nemažai juodųjų pipirų bei nepagailėti druskos.",
    "Įdėti porą šaukštų grietinės, apie saują smulkintų krapų ir petražolių, viską gerai išminkyti.",
    "Iš šaldytuvo ištraukti tešlą, leisti jai apie 15 minučių atšilti.",
    "Gana plonai iškočioti atšilusią tešlą. Jei tešla labai limpa, kočiojant galima pabarstyti daugiau miltų, ne per daug – tik tiek, kad tešla neliptų.",
    "Dubenėliu išspausti skritulėlius, ant jų negailint dėti mėsos įdaro. Suimti kiekvieno taip paruošto skritulėlio kraštus ir viršuje juos gražiai užlankstyti.",
    "Išplakti kiaušinį su pora šaukštų vandens ir šiuo plakiniu patepto kiekvieno kibino paviršių.",
    "Paruoštus kibinus dėlioti į kepimo popieriumi išklotą skardą, dėti į 180 laipsnių orkaitę ir kepti apie 20-30 minučių, priklausomai nuo kibinų kiekio ir dydžio.",
  ],
  image: image,
  mostPopular: false,
};
