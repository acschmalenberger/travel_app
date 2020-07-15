import React from "react";

import Nav from "./components/Nav";
import CardPlanning from "./components/CardPlanning";
import CardIndv from "./components/CardIndv";
import CardBudget from "./components/CardBudget"

function App() {
  return (
    <div>
      <Nav />

      <CardPlanning />
      <CardIndv />
      <CardBudget />
    </div>
  );
}

export default App;
