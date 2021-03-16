import styled from "styled-components";

import { colors } from "./../../styles/colorPalette";

const PictureBubbleBlockButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  bottom: 0;

  padding: 5px;

  background-color: ${colors.whiteOpacity05};

  border-radius: 5px;
`;

const PictureBubbleBlockButton = styled.button`
  display: flex;

  padding: 5px;

  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: ${colors.white};

  background-color: ${colors.black};

  border: 1px dashed ${colors.whiteOpacity05};
  border-radius: 5px;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity09};

    border: 1px dashed ${colors.whiteOpacity09};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export { PictureBubbleBlockButtons, PictureBubbleBlockButton };
