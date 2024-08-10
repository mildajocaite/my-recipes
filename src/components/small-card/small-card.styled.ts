import styled from "styled-components";

import { colorDarkerOrange, colorDarkOrange } from "src/styles/colors";
import { padding } from "src/styles/layout";

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-out;
`;

export const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: ${padding} 0 0;
  color: ${colorDarkOrange};
  text-align: left;
`;

export const StyledCard = styled.button`
  max-width: 220px;
  min-height: 200px;
  width: 100%;
  margin: ${padding};
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  outline: none;

  &:hover {
    ${StyledImage} {
      transform: scale(1.1);
    }

    ${StyledTitle} {
      color: ${colorDarkerOrange};
    }
  }

  &:focus-visible,
  &:focus {
    outline: none;
  }
`;
