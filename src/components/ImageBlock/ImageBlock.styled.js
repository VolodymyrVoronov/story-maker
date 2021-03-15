import styled, { css } from "styled-components";

import { colors } from "./../../styles/colorPalette";

const baseStyles = css`
  display: flex;

  margin: 0 15px;
  padding: 10px;

  font-family: inherit;
  font-size: 16px;
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
`;

const InputGraphicField = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const InputGraphicFieldLabel = styled.label`
  ${baseStyles}
`;

const RemoveButton = styled.button`
  ${baseStyles}
  margin: 15px 0;
`;

export { InputGraphicField, InputGraphicFieldLabel, RemoveButton };
