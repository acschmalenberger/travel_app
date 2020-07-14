import React from "react";

import Nav from "./components/Nav";
import CardPlanning from "./components/CardPlanning"
import CardIndv from "./components/CardIndv"

function App() {
  return (
    <div>
      <Nav />

      <CardPlanning />
      <CardIndv />
    </div>
  );
}

export default App;
