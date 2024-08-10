import React from "react";

import { CategoryCard } from "src/components/category-card";
import { Heading } from "src/components/heading";
import { RecipeCard } from "src/components/recipe-card/recipe-card";
import { categories } from "src/static/category";
import { recipes } from "src/static/recipe";

import {
  StyledCategories,
  StyledCategoriesContainer,
  StyledMostPopularContainer,
  StyledMostPopularRecipes,
} from "./home.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <StyledCategoriesContainer>
        <Heading title="PATIEKALŲ RŪŠYS" />
        <StyledCategories>
          {categories.map((category) => (
            <CategoryCard {...category} />
          ))}
        </StyledCategories>
      </StyledCategoriesContainer>
      <StyledMostPopularContainer>
        <Heading title="POPULIARIAUSI RECEPTAI" />
        <StyledMostPopularRecipes>
          {recipes
            .filter((recipe) => recipe.mostPopular)
            .map((recipe) => (
              <RecipeCard
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                description={recipe.description}
              />
            ))}
        </StyledMostPopularRecipes>
      </StyledMostPopularContainer>
    </>
  );
};

export { HomePage };
