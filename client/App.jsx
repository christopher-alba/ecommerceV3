import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default App;
