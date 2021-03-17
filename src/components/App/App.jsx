import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { MobileView, isMobile } from "react-device-detect";

import Maker from "./../Maker/Maker";
import StartPage from "./../StartPage/StartPage";
import NotificationMessage from "./../NotificationMessage/NotificationMessage";

import { AppBody } from "./App.styled";

const App = () => {
  const { isStartButtonClick } = useSelector(({ app }) => app);
  let history = useHistory();

  React.useEffect(() => {
    history.replace("/");
  }, [history]);

  return (
    <>
      {MobileView && isMobile ? (
        <NotificationMessage />
      ) : (
        <AppBody startButtonWasClicked={isStartButtonClick}>
          <Route
            render={({ location }) => {
              return (
                <PageTransition
                  preset="moveToLeftFromRight"
                  transitionKey={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={StartPage} />
                    <Route exact path="/comics-maker" component={Maker} />
                  </Switch>
                </PageTransition>
              );
            }}
          />
        </AppBody>
      )}
    </>
  );
};

export default App;
