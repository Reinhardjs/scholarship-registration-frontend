import "./App.css";
import JapaneseStudiesRegistration from "./pages/JapaneseStudiesRegistration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/studies">
          <JapaneseStudiesRegistration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
