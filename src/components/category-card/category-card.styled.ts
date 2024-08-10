import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  colorDarkerOrange,
  colorDarkOrange,
  colorLightOrange,
  colorOrange,
} from "src/styles/colors";
import { padding, paddingXS } from "src/styles/layout";

export const StyledCard = styled.div`
  min-width: 340px;
  max-width: 340px;
  width: 100%;
  min-height: 358px;
  padding: ${padding};
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${colorDarkOrange};
  margin: ${paddingXS} 0;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  color: ${colorDarkOrange};
  margin: ${paddingXS} 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorDarkerOrange};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: ${colorOrange};
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${colorLightOrange};
  }
`;

export const StyledLinkText = styled.p`
  margin: 0 ${paddingXS} 0 0;
`;
