import { Recipe } from "src/static/recipe";
import { Category } from "src/static/category";

export const filterRecipesByType = (recipes: Recipe[], category: Category) =>
  recipes.filter((recipe) => recipe.type === category.category);
