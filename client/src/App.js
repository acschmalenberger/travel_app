import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Login from "./pages/Loginscreen";

function App() {
  return (
    <div>
      <Login />
      <Nav />
      <Books />
    </div>
  );
}

export default App;
