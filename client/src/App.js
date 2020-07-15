import React from "react";

import Nav from "./components/Nav";
import CardPlanning from "./components/CardPlanning";
import CardIndv from "./components/CardIndv";
import CardBudget from "./components/CardBudget";
import CardItinerary from "./components/CardItinerary";
import CardSignin from "./components/CardSignIn"


function App() {
  return (
    <div>
      <Nav />
      <Dashboard />
      {/* <CardSignin />
      <CardPlanning />
      <CardBudget />
      <CardItinerary />
      <CardIndv /> */}
      

    </div>
  );
}

export default App;
