import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

export default class Tracks extends Component {
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_MM_KEY
        }`
      )
      .then(res => console.log(res))
      .catch(err => console.error(err));
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
