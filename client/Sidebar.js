import React from "react";

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="sidebar">
        <img src="juke.svg" id="logo" />
        <section>
          <h4>
            <a onClick={this.props.deselectAlbum}>ALBUMS</a>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
