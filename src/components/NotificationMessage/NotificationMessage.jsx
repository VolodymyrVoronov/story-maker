import React from "react";

import {
  NotificationMessageContainer,
  NotificationMessageTitle,
  NotificationMessageText,
} from "./NotificationMessage.styled";

const NotificationMessage = () => {
  return (
    <NotificationMessageContainer>
      <NotificationMessageTitle>
        Only on desktop/laptop available.
      </NotificationMessageTitle>
      <NotificationMessageText>
        *Mobile version in under development.
      </NotificationMessageText>
    </NotificationMessageContainer>
  );
};

export default NotificationMessage;
