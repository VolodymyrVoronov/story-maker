import styled, { css } from "styled-components";

import { colors } from "./../../styles/colorPalette";

const TextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;

  padding-bottom: 18%;
`;

const TextBody = styled.p`
  display: flex;

  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 18px;
  line-height: 18px;
`;

const TextEditor = styled.textarea`
  display: flex;

  font-family: "Montserrat", "Arial", sans-serif;

  border: 2px dotted ${colors.blackOpacity05};
`;

const TextBlockButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  bottom: 0;

  padding: 5px;

  background-color: ${colors.whiteOpacity05};

  border-radius: 5px;
`;

const TextBlockButton = styled.button`
  display: flex;

  margin-right: 2px;
  padding: 5px;

  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: ${colors.white};

  background-color: ${colors.black};

  border: 1px dashed ${colors.whiteOpacity05};
  border-radius: 5px;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity09};

    border: 1px dashed ${colors.whiteOpacity09};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export {
  TextBlockContainer,
  TextBody,
  TextEditor,
  TextBlockButtons,
  TextBlockButton,
};
