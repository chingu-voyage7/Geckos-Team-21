import React, { Component } from "react";
import Links from "./layout/Links";

class Homepage extends Component {
  render() {
    return (
      <div
        className="homepage"
        style={{
          background: 'url("./assets/images/background.jpg") no-repeat',
          backgroundSize: "cover"
        }}
      >
        <div className="hp-overlay">
          <h1 className="hp-slogan">Set up Your Goals</h1>

          <Links />
        </div>
      </div>
    );
  }
}

export default Homepage;
