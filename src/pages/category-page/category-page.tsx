import React from "react";

import { StyledContent, StyledNote } from "./category-page.styled";
import { recipes } from "src/static/recipe";
import { Heading } from "src/components/heading";
import { Category as CategoryType } from "src/static/category";
import { filterRecipesByType } from "src/utils/category-utils";
import { RecipeCard } from "src/components/recipe-card";

interface Props {
  category: CategoryType;
}

export const CategoryPage: React.FC<Props> = (props) => {
  const { category } = props;
  // const [searchValue, setSearchValue] = useState<string>("");
  // const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  // const filterRecipes = debounce(
  //   () =>
  //     setFilteredRecipes(
  //       recipes.filter((recipe) =>
  //         recipe.title
  //           .toLocaleLowerCase()
  //           .includes(searchValue.toLocaleLowerCase()),
  //       ),
  //     ),
  //   500,
  // );

  // const handleValueChange = (value: string) => {
  //   setSearchValue(value);
  //   filterRecipes();
  // };

  return (
    <>
      <Heading title={category.title.toLocaleUpperCase()} />
      <StyledContent>
        {filterRecipesByType(recipes, category).length > 0 ? (
          filterRecipesByType(recipes, category).map((recipe) => (
            <RecipeCard
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
            />
          ))
        ) : (
          <StyledNote>Nepavyko rasti jokių receptų</StyledNote>
        )}
      </StyledContent>
    </>
  );
};
