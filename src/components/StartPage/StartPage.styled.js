import styled from "styled-components";

import { colors } from "./../../styles/colorPalette";

const StartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;

  margin: 0;
  margin-left: 15%;
  padding: 0;
`;

const StartPageTitle = styled.h1`
  display: flex;

  font-family: inherit;
  font-size: 100px;
  line-height: 100px;
  color: ${colors.white};
`;

const StartPageText = styled.p`
  display: flex;

  width: 600px;

  margin: 25px 0 35px;

  font-family: inherit;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.white};
`;

export { StartPageContainer, StartPageTitle, StartPageText };
