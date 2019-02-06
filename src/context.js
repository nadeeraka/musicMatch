import React, { Component } from "react";
import { createContext } from "vm";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    tracks: "",
    heading: "Top 10 songs "
  };
  render() {
    return (
      <Contaxet.Provider value={this.state}>
        {this.props.children}
      </Contaxet.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
