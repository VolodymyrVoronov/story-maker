import styled from "styled-components";

import { colors } from "./../../styles/colorPalette";

const NotificationMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  margin: 0;
  padding: 0 5%;
`;

const NotificationMessageTitle = styled.h1`
  display: flex;

  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: ${colors.white};
`;

const NotificationMessageText = styled.p`
  display: flex;

  margin-top: 3rem;

  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
  color: ${colors.white};
`;

export {
  NotificationMessageContainer,
  NotificationMessageTitle,
  NotificationMessageText,
};
