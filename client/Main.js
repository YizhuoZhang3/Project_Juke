import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'

class Main extends React.Component {
    render() {
        return (
          <div id='main' class='row container'>
            <Sidebar/>
            <div className='container'>
            <AllAlbums/>
            </div>
            <Player/>
          </div>
        )
    }
}

export default Main;