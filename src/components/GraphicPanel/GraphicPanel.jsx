import React from "react";
import { useDispatch } from "react-redux";

import { addNewGraphicFrameAC } from "./../../redux/actions/actions";

import {
  GraphicPanelContainer,
  GraphicPanelTitle,
  GraphicFrameContainer,
  GraphicPanelControls,
  GraphicPanelControlLabel,
  GraphicPanelControl,
  GraphicFrame,
} from "./GraphicPanel.styled";

import { colors } from "./../../styles/colorPalette";

const GraphicPanel = () => {
  const dispatch = useDispatch();

  const [borderWidth, setBorderWidth] = React.useState(1);
  const [borderRadius, setBorderRadius] = React.useState(0);
  const [borderColor, setBorderColor] = React.useState(
    `rgba(255, 255, 255, 0.5)`
  );

  const onGraphicFrameClick = (borderWidth, borderRadius, borderColor) => {
    dispatch(addNewGraphicFrameAC(borderWidth, borderRadius, borderColor));
  };

  const onBorderWidthChange = (e) => {
    setBorderWidth(e.target.value);
  };

  const onBorderRadiusChange = (e) => {
    setBorderRadius(e.target.value);
  };

  const onBorderColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  return (
    <GraphicPanelContainer>
      <GraphicPanelTitle>Image/Photo frame</GraphicPanelTitle>
      <GraphicPanelControls>
        <GraphicPanelControlLabel htmlFor="borderWidth">
          Border width
        </GraphicPanelControlLabel>
        <GraphicPanelControl
          type="range"
          id="borderWidth"
          min="1"
          max="10"
          step="1"
          defaultValue="1"
          onChange={onBorderWidthChange}
        />
      </GraphicPanelControls>
      <GraphicPanelControls>
        <GraphicPanelControlLabel htmlFor="borderRadius">
          Border raduis
        </GraphicPanelControlLabel>
        <GraphicPanelControl
          type="range"
          id="borderRadius"
          min="1"
          max="50"
          step="1"
          defaultValue="1"
          onChange={onBorderRadiusChange}
        />
      </GraphicPanelControls>
      <GraphicPanelControls>
        <GraphicPanelControlLabel htmlFor="borderColor">
          Border color
        </GraphicPanelControlLabel>
        <GraphicPanelControl
          type="color"
          id="borderColor"
          defaultValue={`${colors.whiteOpacity05}`}
          onChange={onBorderColorChange}
        />
      </GraphicPanelControls>
      <GraphicFrameContainer>
        <GraphicFrame
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderColor={borderColor}
          onClick={() =>
            onGraphicFrameClick(borderWidth, borderRadius, borderColor)
          }
        >
          Add to canvas.
        </GraphicFrame>
      </GraphicFrameContainer>
    </GraphicPanelContainer>
  );
};

export default React.memo(GraphicPanel);
