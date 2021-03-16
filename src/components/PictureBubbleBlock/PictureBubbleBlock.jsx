import React from "react";
import { useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import {
  PictureBubbleBlockButtons,
  PictureBubbleBlockButton,
} from "./PictureBubbleBlock.styled";

import { colors } from "./../../styles/colorPalette";

const PictureBubbleBlock = ({
  id,
  bgImage,
  zIndex,
  onPictureBubbleBlockClick,
}) => {
  const dispatch = useDispatch();

  const [showElement, setShowElement] = React.useState(false);

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: "95%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    outline: `1px dashed ${colors.blackOpacity05}`,
    zIndex: `${zIndex}`,
  };

  const onElementEnter = () => {
    setShowElement(true);
  };

  const onElementLeave = () => {
    setShowElement(false);
  };

  const onDeleteButtonClick = (id) => {
    // dispatch(deletePictureBubbleBlockAC(id));
  };

  return (
    <Rnd
      style={style}
      bounds="parent"
      default={{
        width: 100,
        height: 100,
        x: 291,
        y: 50,
      }}
      onClick={() => onPictureBubbleBlockClick(id)}
      onMouseEnter={onElementEnter}
      onMouseLeave={onElementLeave}
    >
      {showElement ? (
        <PictureBubbleBlockButtons>
          <PictureBubbleBlockButton onClick={() => onDeleteButtonClick(id)}>
            Delete
          </PictureBubbleBlockButton>
        </PictureBubbleBlockButtons>
      ) : (
        ``
      )}
    </Rnd>
  );
};

export default PictureBubbleBlock;
