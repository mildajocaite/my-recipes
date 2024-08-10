import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledCard, StyledImage, StyledTitle } from "./small-card.styled";

interface OwnProps {
  id: string;
  icon: string;
  title: string;
}

type Props = OwnProps;

const SmallCard: React.FC<Props> = (props) => {
  const { id, icon, title } = props;
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate(`/${id}`)}>
      <StyledImage src={icon} />
      <StyledTitle>{title}</StyledTitle>
    </StyledCard>
  );
};
export { SmallCard };
