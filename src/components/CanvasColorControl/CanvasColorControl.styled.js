import styled, { css } from "styled-components";

import { colors } from "./../../styles/colorPalette";

const CanvasColorControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 210px;

  margin: 0 2.5px;
  padding: 10px;

  border: 2px dashed ${colors.whiteOpacity05};
  border-radius: 5px;
`;

const CanvasColorControlTitle = styled.h3`
  display: flex;
  justify-content: center;

  font-family: inherit;
  font-size: 22px;
  line-height: 26px;
  color: ${colors.white};
`;

const CanvasColorControlButtons = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 10px;
`;

const CanvasColorControlButton = styled.li`
  position: relative;
  display: block;

  margin: 5px;

  width: 20px;
  height: 20px;

  background-color: ${(props) => props.color};

  border-radius: 50%;

  transition: 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    display: block;

    top: -3px;
    left: -3px;

    width: 26px;
    height: 26px;

    border: 2px solid ${colors.whiteOpacity03};
    border-radius: 50%;
  }

  &:hover {
    &::before {
      border: 2px solid ${colors.whiteOpacity08};
      transition: 0.3s ease;

      cursor: pointer;

      outline: none;

      transform: scale(1.1);
    }
  }

  ${(props) =>
    props.activeIndex
      ? css`
          &::before {
            position: absolute;
            content: "";
            display: block;

            top: -3px;
            left: -3px;

            width: 26px;
            height: 26px;

            border: 2px solid ${colors.whiteOpacity08};
            border-radius: 50%;
          }
        `
      : css``}
`;

export {
  CanvasColorControlContainer,
  CanvasColorControlTitle,
  CanvasColorControlButtons,
  CanvasColorControlButton,
};
