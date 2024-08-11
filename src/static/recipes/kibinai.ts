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
    "Miltus suberiame į dubenį ir įtarkuojame į juos šaltą sviestą.",
    "Įtarkuotą sviestą šiek tiek patriname ir pasmulkiname pirštais, kol sviestas visiškai susimaišys su miltais ir šis mišinys taps panašus į trupinius. (Jeigu turime virtuvės kombainą, galime supaprastinti šią užduotį tiesiog sudėdami į jį gabaliukais supjaustytą labai  šaltą sviestą, suberdami miltus ir leidžiant kombainui keletą minučių viską pasmulkinti).",
    "Į sviesto ir miltų trupinius būtinai įdedame keletą žiupsnelių druskos ir išmaišome šaukštu.",
    "Kiaušinį paplakame su grietine ir supilame į tešlą.",
    "Viską suspaudžiame į vieną tešlos gabalą, porą kartų paminkydami, bet neperminkydami, kad tešla netaptų per kieta.",
    "Duodame tešlai pailsėti šaldytuve apie valandą.",
    "Kiaulieną supjaustome nedideliais kubeliais.",
    "Itin smulkiai sukapojame svogūną ir griežinėliais pasmulkiname porus, įmaišome į mėsą.",
    "Įberiame porą žiupsnelių smulkintų lauro lapų, nemažai juodųjų pipirų bei nepagailime druskos.",
    "Įdedame porą šaukštų grietinės, apie saują smulkintų krapų ir petražolių, viską gerai išminkome.",
    "Iš šaldytuvo ištraukiame tešlą, leidžiame jai apie 15 minučių atšilti.",
    "Gana plonai iškočiojame atšilusią tešlą. Jei tešla labai limpa, kočiodami galime pabarstyti daugiau miltų, ne per daug – tik tiek, kad tešla neliptų.",
    "Dubenėliu išspaudžiame skritulėlius, ant jų negailėdami dedame mėsos įdaro. Suimame kiekvieno taip paruošto skritulėlio kraštus ir viršuje juos gražiai užlankstome.",
    "Išplakame kiaušinį su pora šaukštų vandens ir šiuo plakiniu patepame kiekvieno kibino paviršių.",
    "Paruoštus kibinus dėliojame į kepimo popieriumi išklotą skardą, šauname į 180 laipsnių orkaitę ir kepame apie 20-30 minučių, priklausomai nuo kibinų kiekio ir dydžio. SKANAUS!",
  ],
  image: image,
  mostPopular: false,
};
