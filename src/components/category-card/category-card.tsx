import React from "react";

import {
  StyledCard,
  StyledDescription,
  StyledImage,
  StyledLink,
  StyledLinkText,
  StyledTitle,
} from "./category-card.styled";
import { AiOutlineArrowRight } from "react-icons/ai";
import { colorDarkerOrange } from "src/styles/colors";

interface OwnProps {
  icon: string;
  title: string;
  description: string;
  path: string;
}

type Props = OwnProps;

export const CategoryCard: React.FC<Props> = (props) => {
  const { icon, title, description, path } = props;

  return (
    <StyledCard>
      <StyledImage src={icon} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledLink to={path}>
        <StyledLinkText>Peržiūrėti receptus</StyledLinkText>
        <AiOutlineArrowRight color={colorDarkerOrange} size="16px" />
      </StyledLink>
    </StyledCard>
  );
};
