import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewComicsPictureBubbleAC } from "./../../redux/actions/actions";

import {
  ComicsPictureBubblePanelContainer,
  ComicsPictureBubblePanelTitle,
  ComicsPictureBubbles,
  ComicsPictureBubble,
} from "./ComicsPictureBubblePanel.styled";

const ComicsPictureBubblePanel = () => {
  const dispatch = useDispatch();
  const { comicsPictureBubbles } = useSelector(({ app }) => app);

  const onBubbleClick = (comicsPictureBubbleId) => {
    dispatch(addNewComicsPictureBubbleAC(comicsPictureBubbleId));
  };

  return (
    <ComicsPictureBubblePanelContainer>
      <ComicsPictureBubblePanelTitle>
        Picture bubbles
      </ComicsPictureBubblePanelTitle>
      <ComicsPictureBubbles>
        {comicsPictureBubbles.map((pictureBubble) => {
          const { id, comicsPictureBubbleType } = pictureBubble;
          return (
            <ComicsPictureBubble
              key={id}
              comicsPictureBubbleBg={comicsPictureBubbleType}
              onClick={() => onBubbleClick(id)}
            />
          );
        })}
      </ComicsPictureBubbles>
    </ComicsPictureBubblePanelContainer>
  );
};

export default React.memo(ComicsPictureBubblePanel);
