import styled from "styled-components";

import { colorDarkOrange } from "src/styles/colors";
import { padding } from "src/styles/layout";

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  min-width: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-out;
`;

export const StyledCard = styled.button`
  max-width: 300px;
  min-height: 380px;
  width: 100%;
  margin: ${padding};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  color: ${colorDarkOrange};
  border: none;
  background: white;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    ${StyledImage} {
      transform: scale(1.1);
    }
  }

  &:focus-within {
    outline: none;
    transform: scale(1.05);
  }
`;

export const StyledContent = styled.div`
  padding: ${padding};
  flex-grow: 1;
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: ${padding} 0;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
`;
