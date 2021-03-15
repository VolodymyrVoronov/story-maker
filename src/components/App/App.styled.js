import styled, { css } from "styled-components";

const AppBody = styled.main`
  display: block;

  min-width: 1028px;

  ${(props) =>
    props.startButtonWasClicked
      ? css`
          height: 1600px;
        `
      : css`
          height: 100vh;
        `}

  ${(props) =>
    props.startButtonWasClicked
      ? css`
          margin: 0 auto;
          margin-bottom: 25px;
        `
      : css``}
`;

export { AppBody };
