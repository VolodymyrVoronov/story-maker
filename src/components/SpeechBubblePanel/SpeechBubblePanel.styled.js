import styled, { css } from "styled-components";

import { colors } from "./../../styles/colorPalette";

const SpeechBubblePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 330px;

  margin: 0 2.5px;
  padding: 10px;

  border: 2px dashed ${colors.whiteOpacity05};
  border-radius: 5px;
`;

const SpeechBubblePanelTitle = styled.h3`
  display: flex;
  justify-content: center;

  font-family: inherit;
  font-size: 22px;
  line-height: 26px;
  color: ${colors.white};
`;

const SpeechBubbles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SpeechBubble = styled.div`
  display: flex;

  margin: 11px;

  width: 80px;
  height: 60px;

  background-image: url("${(props) => props.bubbleBg}");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;

  background-color: ${colors.whiteOpacity04};

  border-radius: 5px;

  &:hover {
    cursor: pointer;

    transform: scale(1.3);
  }
`;

export {
  SpeechBubblePanelContainer,
  SpeechBubblePanelTitle,
  SpeechBubbles,
  SpeechBubble,
};
