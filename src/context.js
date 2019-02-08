import React, { Component } from "react";
import axios from "axios";
import Key from "./util/key";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    tracks: [],
    heading: "Top 10 songs "
  };
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
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
