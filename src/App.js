import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recepies from "./pages/Recepies";
import Recepie from "./pages/Recepie";
import Oops from "./pages/Oops";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        {/* Navbar */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recepies" component={Recepies} />
          <Route path="/recepies/:id" component={Recepie} />
          <Route component={Oops} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
