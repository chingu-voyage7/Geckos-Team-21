import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Homepage from "./components/Homepage";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
