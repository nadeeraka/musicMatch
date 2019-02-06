import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layouts/nav";
import Index from "./components/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
          <div className="container">
            <Switch>
              <Route path="/" component={Index} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
