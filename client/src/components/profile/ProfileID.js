import React, { Component } from "react";
import Gravatar from "react-gravatar";

// Dummy Data
const { Users } = require("../../data");

class ProfileID extends Component {
  render() {
    // Find User
    const user = Users.find(user => user.id === this.props.id);

    return (
      <div className="prof-body-id">
        <Gravatar email="" size={130} default="mp" className="prof-img" />

        <p>
          {user.firstName} {user.lastName}
        </p>

        <p>{user.profile.country}</p>
      </div>
    );
  }
}

export default ProfileID;
