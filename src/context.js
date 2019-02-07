import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    tracks: "",
    heading: "Top 10 songs "
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
