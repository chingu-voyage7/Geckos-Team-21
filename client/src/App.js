import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Homepage from "./components/Homepage";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
