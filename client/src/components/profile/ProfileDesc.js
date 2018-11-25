import React, { Component } from "react";

// Data
const { Users } = require("../../data");

class ProfileDesc extends Component {
  render() {
    // Find User
    const user = Users.find(user => user.id === this.props.id);

    return (
      <div className="prof-body-description">
        <div>
          <p className="title">Bio :</p>
          <p>{user.profile.bio}</p>
        </div>

        <div>
          <div className="goals">
            <p className="title">Goals :</p>
            <p>
              Active Goals:
              {
                user.goal.filter(goal => (goal.isCompleted ? true : false))
                  .length
              }
            </p>

            <p>
              Finished Goals:
              {
                user.goal.filter(goal => (!goal.isCompleted ? true : false))
                  .length
              }
            </p>
          </div>

          <div className="interests">
            <p className="title">Interests :</p>
            <p>{user.profile.interests.join(", ")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDesc;
