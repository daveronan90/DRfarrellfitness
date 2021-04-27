import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <video autoPlay muted disablePictureInPicture loop>
        <source src={`${process.env.PUBLIC_URL}/Equipment video updated.mp4`} />
      </video>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
