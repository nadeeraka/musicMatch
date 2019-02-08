import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/spinner";

export default class Tracks extends Component {
  render() {
    return (
      <>
        <Consumer>
          {value => {
            const { tracks, heading } = value;
            if (tracks === undefined || tracks.length === 0) {
              return <Spinner />;
            } else {
              return <h1>Tracks Loaded</h1>;
            }
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row" />
              </>
            );
          }}
        </Consumer>
      </>
    );
  }
}
