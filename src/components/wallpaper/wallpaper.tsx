import React from "react";

import { StyledWallpaper, StyledWallpaperProps } from "./wallpaper.styled";

type Props = StyledWallpaperProps;

export const Wallpaper: React.FC<Props> = (props) => {
  const { ...rest } = props;

  return <StyledWallpaper {...rest} />;
};
