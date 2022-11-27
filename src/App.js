import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import JapaneseStudiesStudentRegistration from "./pages/japaneseStudies/JapaneseStudiesStudentRegistration";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/student">
        <JapaneseStudiesStudentRegistration />
      </Route>
    </Switch>
  );
}

export default App;
