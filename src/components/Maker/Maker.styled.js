import styled, { css } from "styled-components";

const MakerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MakerControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  min-width: 1028px;

  margin: 0 0 25px 0;
`;

const MakerControlsButtons = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin: 10px;
`;

const MakerBody = styled.div`
  ${(props) =>
    props.startButtonWasClicked
      ? css`
          width: 783px;
          height: 1122px;
        `
      : css``}

  margin: 0 auto;

  outline: 10px solid rgba(255, 255, 255, 0.1);

  background-color: ${(props) => props.canvasColor};
  transition: 1s ease;
`;

export { MakerContainer, MakerControls, MakerControlsButtons, MakerBody };
