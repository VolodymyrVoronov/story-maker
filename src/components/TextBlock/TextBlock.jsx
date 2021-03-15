import React from "react";
import { useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import {
  addNewTextBodyAC,
  deleteTextFrameAC,
} from "../../redux/actions/actions";

import {
  TextBlockContainer,
  TextBody,
  TextEditor,
  TextBlockButtons,
  TextBlockButton,
} from "./TextBlock.styled";

import { colors } from "./../../styles/colorPalette";

const TextBlock = ({ id, textBody, bgImage, zIndex, onImageTextClick }) => {
  const dispatch = useDispatch();

  const [newTextBody, setNewTextBody] = React.useState(`Add new text here.`);
  const [showElement, setShowElement] = React.useState(false);
  const [editedMode, setEditedMode] = React.useState(false);

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

  const onEditButtonClick = () => {
    setEditedMode(true);
  };

  const onConfirmButtonClick = () => {
    setEditedMode(false);
    dispatch(addNewTextBodyAC(id, newTextBody));
  };

  const onTextAreaChange = (e) => {
    setNewTextBody(e.target.value);
  };

  const onDeleteButtonClick = (id) => {
    dispatch(deleteTextFrameAC(id));
  };

  return (
    <Rnd
      style={style}
      bounds="parent"
      default={{
        width: 200,
        height: 200,
        x: 291,
        y: 50,
      }}
      onClick={() => onImageTextClick(id)}
      onMouseEnter={onElementEnter}
      onMouseLeave={onElementLeave}
    >
      <TextBlockContainer>
        {editedMode ? (
          <TextEditor
            rows="2"
            onChange={onTextAreaChange}
            defaultValue={newTextBody}
          />
        ) : (
          <TextBody>{textBody}</TextBody>
        )}
      </TextBlockContainer>
      {showElement ? (
        <TextBlockButtons>
          <TextBlockButton onClick={onEditButtonClick}>
            &#10000;
          </TextBlockButton>
          <TextBlockButton
            onClick={onConfirmButtonClick}
            disabled={!editedMode}
          >
            &#10004;
          </TextBlockButton>
          <TextBlockButton onClick={() => onDeleteButtonClick(id)}>
            Delete
          </TextBlockButton>
        </TextBlockButtons>
      ) : (
        ``
      )}
    </Rnd>
  );
};

export default TextBlock;
