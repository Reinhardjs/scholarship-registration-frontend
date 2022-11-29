import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import StudentRegistration from "./pages/japaneseStudies/StudentRegistration";
import TeacherRegistration from "./pages/japaneseStudies/TeacherRegistration";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/teacher">
        <TeacherRegistration />
      </Route>
      <Route path="/student">
        <StudentRegistration />
      </Route>
    </Switch>
  );
}

export default App;
