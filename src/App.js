import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.scss";
import Classes from "./Pages/Classes/Classes";
import PT from "./Pages/PT/PT";
import PhysicalTherapy from "./Pages/PhysicalTherapy/PhysicalTherapy";
import Footer from "./components/Footer/Footer";
import TeamTraining from "./Pages/TeamTraining/TeamTraining";
import Nutrition from "./Pages/Nutrition/Nutrition";
import Transformations from "./Pages/Transformations/Transformations";
import Styku from "./Pages/Styku/Styku";
import Shop from "./Pages/Shop/Shop";
import Golf from "./Pages/Golf/Golf";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/personalTraining" component={PT} />
          <Route exact path="/physicaltherapy" component={PhysicalTherapy} />
          <Route exact path="/teams" component={TeamTraining} />
          <Route exact path="/nutrition" component={Nutrition} />
          <Route exact path="/transformations" component={Transformations} />
          <Route exact path="/styku" component={Styku} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/golf" component={Golf} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;