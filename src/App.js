import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Oops from "./pages/Oops";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        {/* Navbar*/}
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route component={Oops} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
