import React from "react";
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteGraphicFrameAC,
  uploadNewPictureAC,
} from "../../redux/actions/actions";

import {
  InputGraphicField,
  InputGraphicFieldLabel,
  RemoveButton,
} from "./ImageBlock.styled";

import { colors } from "./../../styles/colorPalette";

const ImageBlock = ({
  id,
  borderColor,
  borderRadius,
  borderWidth,
  bgImage,
  zIndex,
  onImageBlockClick,
}) => {
  const dispatch = useDispatch();
  // const { isStartButtonClick, canvasColor, graphicFrames } = useSelector(
  //   ({ app }) => app
  // );

  const [showElement, setShowElement] = React.useState(false);

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${colors.blackOpacity03}`,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    border: `${borderWidth} solid ${borderColor}`,
    outline: `1px dashed ${colors.blackOpacity05}`,
    borderRadius: `${borderRadius}`,
    zIndex: `${zIndex}`,
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      dispatch(uploadNewPictureAC(URL.createObjectURL(img), id));
      setShowElement(true);
      setShowElement(false);
    }
  };

  const onElementEnter = () => {
    setShowElement(true);
  };

  const onElementLeave = () => {
    setShowElement(false);
  };

  const onDeleteButtonClick = (id) => {
    dispatch(deleteGraphicFrameAC(id));
  };

  return (
    <React.Fragment>
      <Rnd
        style={style}
        bounds="parent"
        default={{
          width: 200,
          height: 200,
          x: 291,
          y: 50,
        }}
        onClick={() => onImageBlockClick(id)}
        onMouseEnter={onElementEnter}
        onMouseLeave={onElementLeave}
      >
        {showElement && bgImage.length !== 0 ? (
          <>
            <RemoveButton onClick={() => onDeleteButtonClick(id)}>
              Delete block
            </RemoveButton>
            <InputGraphicField
              type="file"
              name="myImage"
              onChange={onImageChange}
              id="image"
            />
            <InputGraphicFieldLabel htmlFor="image">
              Upload new photo/image
            </InputGraphicFieldLabel>
          </>
        ) : (
          ``
        )}
        {bgImage.length === 0 ? (
          <>
            <RemoveButton onClick={() => onDeleteButtonClick(id)}>
              Delete block
            </RemoveButton>
            <InputGraphicField
              type="file"
              name="myImage"
              onChange={onImageChange}
              id="image"
            />
            <InputGraphicFieldLabel htmlFor="image">
              Click to upload a photo/image
            </InputGraphicFieldLabel>
          </>
        ) : (
          ``
        )}
      </Rnd>
    </React.Fragment>
  );
};

export default ImageBlock;
