import styled from "styled-components";

import { colors } from "./../../../styles/colorPalette";

const ButtonContainer = styled.button`
  display: flex;

  padding: 10px 25px;

  font-family: inherit;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 1px;
  color: ${colors.white};

  background-color: transparent;

  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  outline: none;

  &:hover {
    border: 2px dashed rgba(255, 255, 255, 0.8);

    cursor: pointer;

    outline: none;
  }
`;

export { ButtonContainer };
