import React from "react";

import {
  StyledHeading,
  StyledText,
  StyledDarkOrange,
  StyledLightOrange,
  StyledLineRow,
} from "./heading.styled";

interface Props {
  title: string;
}

const Heading: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <StyledHeading>
      <StyledText>{title}</StyledText>
      <StyledLineRow>
        <StyledLightOrange />
        <StyledDarkOrange />
        <StyledLightOrange />
      </StyledLineRow>
    </StyledHeading>
  );
};
export { Heading };
