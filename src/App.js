import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layouts/nav";
import Index from "./components/Index";
import { Provider } from "./context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider>
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
      </Provider>
    );
  }
}

export default App;
