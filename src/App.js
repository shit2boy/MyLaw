import React from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import DataVisual from "./components/DataVisual";
import Display from "./components/Display";

function App() {
  return (
    <div className="">
      <NavigationBar />
      <Display />
      <DataVisual />
    </div>
  );
}

export default App;
