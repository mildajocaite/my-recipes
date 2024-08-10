import styled from "styled-components";

import { colorDarkOrange, colorLightOrange } from "src/styles/colors";
import { padding, paddingXS } from "src/styles/layout";

export const StyledHeading = styled.div`
  padding: ${padding} 0;
`;

export const StyledText = styled.p`
  color: ${colorDarkOrange};
  padding-bottom: ${paddingXS};
  text-align: center;
  font-size: 20px;
  margin: 0;
`;

export const StyledLineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const StyledLightOrange = styled.div`
  height: 2px;
  background: ${colorLightOrange};
  width: 80px;
`;

export const StyledDarkOrange = styled.div`
  height: 4px;
  background: ${colorDarkOrange};
  width: 100px;
`;
