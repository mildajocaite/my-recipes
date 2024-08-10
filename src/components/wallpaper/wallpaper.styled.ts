import styled from "styled-components";

import { desktopBreakpoint } from "src/styles/breakpoints";

export interface StyledWallpaperProps {
  $backgroundImage: string;
}

export const StyledWallpaper = styled.div<StyledWallpaperProps>`
  position: relative;
  text-align: center;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: ${desktopBreakpoint}) {
    height: 250px;
  }
`;
