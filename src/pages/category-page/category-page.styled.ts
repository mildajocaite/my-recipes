import styled from "styled-components";

import { colorDarkerOrange, colorDarkOrange } from "src/styles/colors";
import { padding, paddingLG, paddingXS } from "src/styles/layout";
import { desktopBreakpoint } from "src/styles/breakpoints";

export const StyledSearchContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: calc(100% - 16px);
  height: 30px;
  border: 0.5px solid ${colorDarkerOrange};
  color: ${colorDarkOrange};
  font-size: 14px;
  margin: ${paddingXS} ${paddingXS} ${paddingLG};

  &:focus-visible {
    border-width: 2px;
    outline: none;
  }
`;

export const StyledClearButton = styled.button`
  position: absolute;
  color: ${colorDarkerOrange};
  font-size: 24px;
  right: 16px;
  top: 13px;
  cursor: pointer;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${desktopBreakpoint}) {
    justify-content: flex-start;
  }
`;

export const StyledNote = styled.p`
  color: ${colorDarkOrange};
  padding: ${padding};
`;
