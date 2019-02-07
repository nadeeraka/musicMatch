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
            const { Tracks, heading } = value;
            if (Tracks === undefined || Tracks.length === 0) {
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
