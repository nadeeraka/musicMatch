import React, { Component } from "react";
import axios from 'axios';
import { Consumer } from "../../context";
import Key from '../../util/key';

export default class Tracks extends Component {

    componentDidMount()
    {
        
    }
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
