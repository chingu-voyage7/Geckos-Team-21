import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
