import "./App.css";
import React  from "react";
import JapaneseStudiesRegistration from "./pages/japaneseStudies/JapaneseStudiesRegistration";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/studies">
        <JapaneseStudiesRegistration />
      </Route>
    </Switch>
  );
}

export default App;
