import styled from "styled-components";

import { colorDarkerOrange } from "../../styles/colors";

export const StyledFooter = styled.div`
  height: 50px;
  background: ${colorDarkerOrange};
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: static;
`;

export const StyledText = styled.p`
  color: white;
`;
