import { Recipe } from "src/static/recipe";
import image from "src/resources/recipes/suktinukai-lasisa.png";
import { DishType } from "src/static/category";

export const suktinukaiSuLasisa: Recipe = {
  id: "suktinukai-su-lasisa",
  type: DishType.SNACK,
  title: "Tortilijų suktinukai su lašiša",
  description: "Skanūs ir greitai paruošiami tortilijų suktinukai su lašiša",
  duration: "15 min.",
  numberOfServings: 7,
  ingredients: [
    {
      name: "",
      ingredients: [
        {
          amount: "3 vienetai",
          name: "tortilijos",
        },
        {
          amount: "150 gramų",
          name: "tepamo varškės sūrelio su žalumynais (rytas)",
        },
        {
          amount: "150 gramų",
          name: "rūkytos lašišos",
        },
        {
          amount: "2 vienetai",
          name: "agurkai",
        },
        {
          amount: "žiupsnelis",
          name: "krapai",
        },
        {
          amount: "pagal skonį",
          name: "iceberg salotos",
        },
      ],
    },
  ],
  steps: [
    "Tortilijas iki pusės ištepti varškės sūreliu.",
    "Lašišą supjaustyti gabalėliais. Agurkus supjaustyti griežinėliais, geriausia tai daryti su virtuviniu daržovių skustuku, pjaunant per visą ilgį.",
    "Ant suteptų tortilijų dėti salotų lapus, išdėlioti lašišos griežinėlius, berti krapus ir dėti agurko griežinėlius.",
    "Pradėti sukti suktinuką ir susukus iki vidurio, likusią neaptepą tortilijos dalį aptepti varškės sūreliu ir užbaigti sukti.",
    "Paruoštas tortilijas suvynioti į maistinę plėvelę ir palaikyti šaldytuve apie 1 valandą.",
    "Prieš patiekiant, supjaustyti griežinėliais.",
  ],
  image: image,
  mostPopular: false,
};
