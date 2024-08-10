import styled from "styled-components";

import { tabletBreakpoint } from "src/styles/breakpoints";
import {
  colorDarkOrange,
  colorLighterOrange,
  colorLightOrange,
} from "src/styles/colors";
import { padding, paddingLG, paddingSM, paddingXS } from "src/styles/layout";

export const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: ${paddingLG} auto;
  font-family: "Roboto Light", serif;
  flex-wrap: wrap;

  @media (min-width: ${tabletBreakpoint}) {
    flex-wrap: nowrap;
  }
`;

export const StyledImage = styled.img`
  max-height: 100%;
  max-width: calc(100% - 32px);
  margin: ${padding};
  border-radius: 5px;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 45%;
  }
`;

export const StyledInformation = styled.div`
  margin: ${padding};
  flex-grow: 1;
  flex-shrink: 1;
`;

export const StyledDescription = styled.p`
  font-size: 18px;
  color: ${colorDarkOrange};
  text-align: justify;
`;

export const StyledFeatures = styled.div`
  display: grid;
  margin-top: ${paddingSM};
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(5, auto);
  grid-column-gap: ${paddingSM};
  font-size: 18px;
  grid-row-gap: ${paddingXS};
`;

export const StyledFeatureTitle = styled.div`
  font-weight: bold;
`;

export const StyledIngredientsAndSteps = styled.div`
  display: block;
  max-width: 1200px;
  margin: 0 auto ${paddingLG};
  font-family: "Roboto Light", serif;
  flex-wrap: wrap;

  @media (min-width: ${tabletBreakpoint}) {
    display: flex;
  }
`;

export const StyledIngredientsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: ${padding};
  padding: ${padding};
  flex: 4;
  background: ${colorLighterOrange};
`;

export const StyledIngredientsTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid ${colorLightOrange};
  padding-bottom: ${paddingXS};
  margin: 0 0 ${paddingXS};
  //text-transform: capitalize;
`;

export const StyledIngredientsType = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  margin: ${padding} 0 ${paddingXS};
`;

export const StyledIngredients = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-row-gap: ${paddingXS};
  grid-column-gap: ${padding};
  align-items: center;

  & :nth-child(3n + 0) {
    text-align: right;
  }
`;

export const StyledStepsContainer = styled.div`
  flex: 6;
  margin: ${padding};
  padding: ${padding};
  font-size: 18px;
`;

export const StyledSteps = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${padding};
`;

export const StyledStepsList = styled.ol`
  text-align: justify;
  padding-inline-start: ${padding};

  & ::marker {
    font-weight: bold;
  }
`;

export const StyledStep = styled.li`
  margin-bottom: ${paddingXS};
`;
