import React, { Component } from "react";
import { Link } from "react-router-dom";

class Links extends Component {
  // For demo
  state = {
    isAuth: false // Change its value to false see the difference
  };

  render() {
    if (this.state.isAuth) {
      return (
        <div>
          <Link className="link" to="signup">
            Sign up
          </Link>

          <Link className="link" to="login">
            Login
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="link" to="dashboard">
            Dashboard
          </Link>

          <Link className="link" to="profile">
            Profile
          </Link>

          <Link className="link" to="Signout">
            Sign out
          </Link>
        </div>
      );
    }
  }
}

export default Links;
