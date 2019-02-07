import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Tracks extends Component {
  render() {
    return (
      <>
        <Consumer>
          {value => {
            return (
              <div>
                <h1>hahaa</h1>
              </div>
            );
          }}
        </Consumer>
      </>
    );
  }
}
