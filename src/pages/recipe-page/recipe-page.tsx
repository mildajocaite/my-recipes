import React from "react";
import { BiTagAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";

import { IngredientsGroup, recipes } from "src/static/recipe";
import { colorDarkOrange } from "src/styles/colors";

import {
  StyledDetails,
  StyledImage,
  StyledInformation,
  StyledDescription,
  StyledFeatures,
  StyledFeatureTitle,
  StyledIngredientsAndSteps,
  StyledIngredients,
  StyledIngredientsTitle,
  StyledIngredientsContainer,
  StyledIngredientsType,
  StyledStepsContainer,
  StyledStepsList,
  StyledStep,
} from "./recipe-page.styled";
import { Heading } from "src/components/heading";

const RecipePage: React.FC = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id)!;
  const {
    image,
    title,
    description,
    duration,
    numberOfServings,
    ingredients,
    steps,
  } = recipe;

  return (
    <>
      <Heading title={title} />
      <StyledDetails>
        <StyledImage src={image} />
        <StyledInformation>
          <StyledDescription>{description}</StyledDescription>
          <StyledFeatures>
            <StyledFeatureTitle>Pagaminimo laikas:</StyledFeatureTitle>
            <div>{duration}</div>
            <StyledFeatureTitle>Porcijų skaičius:</StyledFeatureTitle>
            <div>{numberOfServings}</div>
          </StyledFeatures>
        </StyledInformation>
      </StyledDetails>
      <StyledIngredientsAndSteps>
        <StyledIngredientsContainer>
          <StyledIngredientsTitle>Ingredientai</StyledIngredientsTitle>
          {ingredients.map((group) => (
            <>
              {ingredients.length !== 1 && (
                <StyledIngredientsType>{group.name}</StyledIngredientsType>
              )}
              <StyledIngredients>
                {group.ingredients.map((ingredient) => (
                  <>
                    <BiTagAlt size="20px" color={colorDarkOrange} />
                    <div>{ingredient.name}</div>
                    <div>{ingredient.amount}</div>
                  </>
                ))}
              </StyledIngredients>
            </>
          ))}
        </StyledIngredientsContainer>
        <StyledStepsContainer>
          <StyledIngredientsTitle>Paruošimo būdas</StyledIngredientsTitle>
          <StyledStepsList>
            {steps.map((step) => (
              <StyledStep>{step}</StyledStep>
            ))}
          </StyledStepsList>
        </StyledStepsContainer>
      </StyledIngredientsAndSteps>
    </>
  );
};

export { RecipePage };
