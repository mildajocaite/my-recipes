import styled from "styled-components";

import { colorLighterOrange } from "src/styles/colors";
import { paddingLG } from "src/styles/layout";

export const StyledCategoriesContainer = styled.div`
  background: ${colorLighterOrange};
  padding: ${paddingLG} 0;
`;

export const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledMostPopularContainer = styled.div`
  padding: ${paddingLG} 0;
`;

export const StyledMostPopularRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
`;
