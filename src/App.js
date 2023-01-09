import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import JapaneseStudiesRegistration from "./pages/JapaneseStudiesRegistration";
import TeacherTrainingRegistration from "./pages/TeacherTrainingRegistration";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/admin/Admin";
import ResendEmail from "./pages/admin/ResendEmail";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/teacher">
        <TeacherTrainingRegistration />
      </Route>
      <Route path="/student">
        <JapaneseStudiesRegistration />
      </Route>
      <Route path="/admin/resend-email">
        <ResendEmail />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
