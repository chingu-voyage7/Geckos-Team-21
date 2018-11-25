import React, { Component } from "react";

// Component
import Header from "../layout/Header";
import NotFound from "../layout/NotFound";
import ProfileID from "./ProfileID";
import ProfileDesc from "./ProfileDesc";

// Dummy Data
const { Users } = require("../../data");

class Profile extends Component {
  render() {
    const { id } = this.props.match.params;

    if (Users.find(user => user.id === id)) {
      return (
        <div id="profile">
          <Header />

          <div className="container">
            <ProfileID id={id} />
            <ProfileDesc id={id} />
          </div>
        </div>
      );
    } else {
      return <NotFound message="There is no profile with this Id" />;
    }
  }
}

export default Profile;
