import React from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {},
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/api/albums");
      const albums = res.data;
      this.setState({ albums });
    } catch (err) {
      console.log("There was a problem getting songs!");
    }
  }

  async selectAlbum(albumId) {
    try {
      const res = await axios.get(`/api/albums/${albumId}`);
      const album = res.data;
      this.setState({ selectedAlbum: album });
    } catch (err) {
      console.log("There was a problem getting the album!");
    }
  }

  deselectAlbum() {
    this.setState({ selectedAlbum: {} });
  }

  render() {
    return (
      <div id="main" className="row container">
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className="container">
          {this.state.selectedAlbum.id ? (
            <SingleAlbum selectedAlbum={this.state.selectedAlbum} />
          ) : (
            <AllAlbums
              albums={this.state.albums}
              selectAlbum={this.selectAlbum}
            />
          )}
        </div>
        <Player />
      </div>
    );
  }
}

export default Main;
