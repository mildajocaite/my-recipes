import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/lazanija.png";
import { DishType } from "src/static/category";

export const lazanija: Recipe = {
  id: "lazanija",
  type: DishType.MAIN_DISH,
  title: "Lazanija",
  description: "Lazanija su kiauliena/jautiena ir bešamelio padažu",
  duration: "1 val.",
  numberOfServings: 8,
  ingredients: [
    {
      name: "lzanija",
      ingredients: [
        {
          amount: "250 g.",
          name: "maltos jautienos",
        },
        {
          amount: "250 g.",
          name: "maltos veršienos",
        },
        {
          amount: "1-2 šaukštai",
          name: "aliejus",
        },
        {
          amount: "2",
          name: "morkos",
        },
        {
          amount: "2",
          name: "svogūnai",
        },
        {
          amount: "1",
          name: "salierai",
        },
        {
          amount: "2 maži (po 400 g.) indeliai",
          name: "konservuoti pomidorai savo sultyse",
        },
        {
          amount: "1 kupinas šaukštas",
          name: "pomidorų pasta",
        },
        {
          amount: "žiupsnelis",
          name: "juodieji pipirai",
        },
        {
          amount: "žiupsnelis",
          name: "druska",
        },
        {
          amount: "ryšelis",
          name: "čiobreliai",
        },
        {
          amount: "1 šauksštas",
          name: "džiovinto raudonėlio",
        },
        {
          amount: "žiupsnelis",
          name: "lauro lapai",
        },
        {
          amount: "šlakelis",
          name: "vanduo",
        },
        {
          amount: "pakelis",
          name: "lazanijos lakštai",
        },
      ],
    },
    {
      name: "padažas",
      ingredients: [
        {
          amount: "40 g.",
          name: "sviestas",
        },
        {
          amount: "40 g.",
          name: "miltai",
        },
        {
          amount: "500 ml.",
          name: "pienas",
        },
        {
          amount: "sauja",
          name: "fermentinis sūris",
        },
        {
          amount: "sauja",
          name: "puskietis sūris (Džiugas)",
        },
      ],
    },
  ],
  steps: [
    "Svarbiausia dalis yra mėsos troškinys su pomidorais, nuo jo ir pradedam. Gerai įkaitinam keptuvę ir dedam į ją pusę arba visą mėsą, priklausomai nuo keptuvės dydžio. Mėsą su mentele paskirstykite ir gražiai apkepkite, kad maži faršo šoneliai apskrustų.",
    "Kol mėsa skrunda, pasiruoškite daržoves: smulkiai supjaustykite svogūną, morkas, salierą.",
    "Kai mėsa apkeps, dėkite ją į puodą, kuriame viską troškinsite, o keptuvėje apkepkite daržoves: pradžioje svogūnus, paskui morkas su salierais.",
    "Kai daržovės suminkštės, dėkite pomidorų pastą (tyrę) ir prieskonius: čiobrelį, raudonėlį, lauro lapus, grūstų pipirų ir druskos.",
    "Dabar viską jau galite kelti į puodą, kuriame troškinsis visas reikalas ir supilkite pomidorus konservuotus savo sultyse.",
    "Uždenkite dangčiu ir leiskite viskam troškintis apie 45 minutes.",
    "Puode arba keptuvėje ištirpinkite sviestą ir suberkite miltus, pamaišykite – pasidarys košelė, leiskite jai truputį pašilti ir pakepti, apie minutę, tada po truputį pilkite pieną ir maišykite nuolat su šluotele, kaitinkite ant ugnies kol pasidarys tirštas padažas.",
    "Ne per minutę viskas pasidaro, todėl būkite kantrūs ir pieną pilkite lėtai, po truputį, kad nesušoktų gumulais ir nuolat maišykite. Kai padažas bus jau sutirštėjęs, įberkite tarkuoto sūrio ir paragaukite, ar netrūksta druskos.",
    "Įjunkite orkaitę 180-190 C",
    "Paimkite indą, kuriame viską sluoksniuosite. Indas turi būti aukštais kraštais ir ne per didelis. Dėkite truputį mėsos troškinio, ant viršaus lazanijos lakštą, tada vėl mėsos ir tuomet jau balto pažado. Tuomet vėl lazanijos lakštą, mėsos troškinį ir baltą padažą. Viršutinis sluoksnis turi būti mėsos troškinys ir baltas padažas.",
    "Šaukite į orkaitę ir kepkite apie 45 – 50 min.",
    "Prieš pabaigą ant viršaus užtarkuokite, jei norite, puskiečio sūrio.",
  ],
  image: image,
  mostPopular: false,
};
