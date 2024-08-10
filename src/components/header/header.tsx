import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import hamburgerIcon from "src/resources/hamburger_icon.png";
import {
  StyledHamburger,
  StyledHeader,
  StyledHeaderContainer,
  StyledMenuDropdown,
  StyledMenuItem,
} from "./header.styled";
import { HOME_PAGE } from "src/service/navigation-service";
import { categories } from "src/static/category";

export const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const location = useLocation();

  const renderMenuItem = (path: string, text: string) => (
    <StyledMenuItem
      key={path}
      $active={path === location.pathname}
      to={path}
      onClick={() => setOpened(false)}
    >
      {text}
    </StyledMenuItem>
  );

  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledMenuDropdown $opened={opened}>
          {[
            {
              path: HOME_PAGE,
              text: "PAGRINDINIS",
            },
            ...categories.map((category) => ({
              path: category.path,
              text: category.title.toLocaleUpperCase(),
            })),
          ].map((menuItem) => renderMenuItem(menuItem.path, menuItem.text))}
        </StyledMenuDropdown>
        <StyledHamburger
          src={hamburgerIcon}
          alt="Hamburger Icon"
          onClick={() => setOpened(!opened)}
        />
      </StyledHeader>
    </StyledHeaderContainer>
  );
};
