import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Animate from "react-smooth";

import { onStartButtonClickAC } from "./../../redux/actions/actions";

import Button from "./../UI/Button/Button";

import {
  StartPageContainer,
  StartPageTitle,
  StartPageText,
} from "./StartPage.styled";

const StartPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const onStartClick = () => {
    history.replace("/comics-maker");
    dispatch(onStartButtonClickAC());
  };

  return (
    <StartPageContainer>
      <Animate from="0" to="1" attributeName="opacity" duration={2000}>
        <StartPageTitle>Story Maker</StartPageTitle>
        <StartPageText>
          Create your own story using some styled components.
        </StartPageText>
      </Animate>

      <Button onClick={onStartClick}>Start creating</Button>
    </StartPageContainer>
  );
};

export default StartPage;
