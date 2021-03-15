import React from "react";
import Animate from "react-smooth";

import { ButtonContainer } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return (
    <Animate from="0" to="1" attributeName="opacity" duration={2000}>
      <ButtonContainer onClick={onClick} type="button">
        {children}
      </ButtonContainer>
    </Animate>
  );
};

export default Button;
