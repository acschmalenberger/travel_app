import React from "react";
import NavStyle from "./style.js"

const useStyles = makeStyles(NavStyle)

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        TRAVL
      </a>
      <a className="navbar-brand" href="/cards">
        Itinerary
      </a>
    </nav>
  );
}

export default Nav;
