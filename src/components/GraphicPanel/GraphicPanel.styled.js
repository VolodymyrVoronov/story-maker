import styled from "styled-components";

import { colors } from "./../../styles/colorPalette";

const GraphicPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 300px;

  margin: 0 2.5px;
  padding: 10px;

  border: 2px dashed ${colors.whiteOpacity05};
  border-radius: 5px;
`;

const GraphicPanelTitle = styled.h3`
  display: flex;
  justify-content: center;

  font-family: inherit;
  font-size: 22px;
  line-height: 26px;
  color: ${colors.white};
`;

const GraphicFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 10px;
`;

const GraphicPanelControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
`;

const GraphicPanelControlLabel = styled.p`
  display: flex;

  font-family: inherit;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: ${colors.white};
`;

const GraphicPanelControl = styled.input`
  display: flex;

  &[type="range"] {
    width: 130px;
    height: 20px;
  }

  &[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 130px;
    height: 20px;
  }

  &[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &[type="color"]::-webkit-color-swatch {
    border: none;
  }
`;

const GraphicFrame = styled.div`
  display: flex;
  align-items: center;

  width: 125px;
  height: 125px;

  margin-top: 10px;

  font-family: inherit;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: ${colors.white};

  border: ${(props) => props.borderWidth + "px"} solid
    ${(props) => props.borderColor};

  transition: all 0.5s ease;

  border-radius: ${(props) => props.borderRadius + "%"};

  &:hover {
    border: ${(props) => props.borderWidth + "px"} solid
      ${(props) => props.borderColor};

    transition: all 0.5s ease;

    cursor: pointer;

    background-color: ${colors.whiteOpacity02};
  }
`;

export {
  GraphicPanelContainer,
  GraphicPanelTitle,
  GraphicFrameContainer,
  GraphicPanelControls,
  GraphicPanelControlLabel,
  GraphicPanelControl,
  GraphicFrame,
};
