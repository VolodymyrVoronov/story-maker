import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewTextFrameAC } from "./../../redux/actions/actions";

import {
  SpeechBubblePanelContainer,
  SpeechBubblePanelTitle,
  SpeechBubbles,
  SpeechBubble,
} from "./SpeechBubblePanel.styled";

const SpeechBubblePanel = () => {
  const dispatch = useDispatch();
  const { bubbles } = useSelector(({ app }) => app);

  const onBubbleClick = (bubbleId) => {
    dispatch(addNewTextFrameAC(bubbleId));
  };

  return (
    <SpeechBubblePanelContainer>
      <SpeechBubblePanelTitle>Speech bubbles</SpeechBubblePanelTitle>
      <SpeechBubbles>
        {bubbles.map((bubble) => {
          const { id, bubbleType } = bubble;
          return (
            <SpeechBubble
              key={id}
              bubbleBg={bubbleType}
              onClick={() => onBubbleClick(id)}
            />
          );
        })}
      </SpeechBubbles>
    </SpeechBubblePanelContainer>
  );
};

export default React.memo(SpeechBubblePanel);
