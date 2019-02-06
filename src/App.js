import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layouts/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
