import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Component
import Links from "./Links";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-logo link">
          Logo
        </Link>

        <div className="header-links">
          <Links />
        </div>
      </div>
    );
  }
}

export default Header;
