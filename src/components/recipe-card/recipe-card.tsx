import React from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledCard,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledTitle,
} from "./recipe-card.styled";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const RecipeCard: React.FC<Props> = (props) => {
  const { id, title, description, image } = props;
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate(`/${id}`)}>
      <StyledImage src={image} />
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledCard>
  );
};
