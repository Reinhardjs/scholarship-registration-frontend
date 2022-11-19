import "./App.css";
import JapaneseStudiesRegistration from "./pages/JapaneseStudiesRegistration";
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
