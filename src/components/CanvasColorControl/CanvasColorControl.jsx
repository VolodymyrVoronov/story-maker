import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCanvasColorAC } from "../../redux/actions/actions";

import {
  CanvasColorControlContainer,
  CanvasColorControlTitle,
  CanvasColorControlButtons,
  CanvasColorControlButton,
} from "./CanvasColorControl.styled";

const CanvasColorControl = () => {
  const dispatch = useDispatch();
  const { canvasColorsPalette } = useSelector(({ app }) => app);

  const [activeCanvasColorIndex, setActiveCanvasColorIndex] = React.useState(0);

  const onCanvasColorClick = (canvasColorId) => {
    dispatch(getCanvasColorAC(canvasColorId));
    setActiveCanvasColorIndex(canvasColorId);
  };

  return (
    <CanvasColorControlContainer>
      <CanvasColorControlTitle>Canvas color</CanvasColorControlTitle>
      <CanvasColorControlButtons>
        {canvasColorsPalette.map((canvasColor) => {
          const { id, color } = canvasColor;
          return (
            <CanvasColorControlButton
              onClick={() => onCanvasColorClick(id)}
              key={id}
              color={color}
              activeIndex={activeCanvasColorIndex === id}
            />
          );
        })}
      </CanvasColorControlButtons>
    </CanvasColorControlContainer>
  );
};

export default React.memo(CanvasColorControl);
