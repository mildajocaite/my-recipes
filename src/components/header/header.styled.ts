import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { padding, paddingXS } from "src/styles/layout";
import { desktopBreakpoint } from "src/styles/breakpoints";
import {
  colorDarkOrange,
  colorLightOrange,
  colorOrange,
} from "src/styles/colors";

interface StyledProps {
  $opened?: boolean;
}

interface StyledMenuItemProps {
  $active?: boolean;
}

export const StyledHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  height: 60px;

  @media (min-width: ${desktopBreakpoint}) {
    height: 95px;
  }
`;

export const StyledHamburger = styled.img`
  height: 30px;
  padding-right: ${padding};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${desktopBreakpoint}) {
    display: none;
  }
`;

export const StyledMenuDropdown = styled.div<StyledProps>`
  visibility: hidden;
  position: absolute;
  right: 0;
  left: 0;
  top: 60px;
  display: block;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.15s ease-out,
    visibility 0s linear 0.2s;
  background: white;

  ${({ $opened }) =>
    $opened &&
    css`
      z-index: 2;
      width: 100%;
      visibility: visible;
      max-height: 238px;
      transition: max-height 0.25s ease-in;
    `};

  @media (min-width: ${desktopBreakpoint}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: initial;
    visibility: visible;
    max-height: 95px;
    padding: 0 ${padding};
  }
`;

export const StyledMenuItem = styled(Link)<StyledMenuItemProps>`
  display: block;
  background: white;
  text-align: center;
  font-size: 16px;
  padding: ${paddingXS} ${padding};
  color: ${colorDarkOrange};
  text-decoration: none;
  border-bottom: 1px solid ${colorLightOrange};
  margin: ${paddingXS} 0;

  ${({ $active }) =>
    $active &&
    css`
      font-weight: bold;
    `};

  &:hover,
  &:active {
    color: ${colorOrange};
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    transform: scale(1.05);
  }

  @media (min-width: ${desktopBreakpoint}) {
    border-bottom: none;

    ${({ $active }) =>
      $active &&
      css`
        border-bottom: 2px solid ${colorLightOrange};
      `};

    &:focus-visible {
      border-bottom: none;
      box-shadow: 0 4px 2px -2px ${colorLightOrange};
    }
  }
`;
