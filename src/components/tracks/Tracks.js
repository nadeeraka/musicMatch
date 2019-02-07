import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import Key from "../../util/key";
import Spinner from "../layouts/spinner";

export default class Tracks extends Component {
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${Key}`
      )
      .then(res => {
        console.log(res);
        this.setState({ tracks: res.data.message.body.track_list });
      })
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
                <Spinner />
              </div>
            );
          }}
        </Consumer>
      </>
    );
  }
}
