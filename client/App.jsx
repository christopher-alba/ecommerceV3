import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
};

export default App;
