import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import JapaneseStudiesStudentRegistration from "./pages/japaneseStudies/JapaneseStudiesStudentRegistration";
import JapaneseStudiesTeacherRegistration from "./pages/japaneseStudies/JapaneseStudiesTeacherRegistration";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/teacher">
        <JapaneseStudiesTeacherRegistration />
      </Route>
      <Route path="/student">
        <JapaneseStudiesStudentRegistration />
      </Route>
    </Switch>
  );
}

export default App;
