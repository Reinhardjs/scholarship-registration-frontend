import "./App.css";
import React  from "react";
import JapaneseStudiesStudentRegistration from "./pages/japaneseStudies/JapaneseStudiesStudentRegistration";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/studies">
        <JapaneseStudiesStudentRegistration />
      </Route>
    </Switch>
  );
}

export default App;
