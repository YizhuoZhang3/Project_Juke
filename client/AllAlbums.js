import React from 'react'
import axios from 'axios'

const data = [
    {
      "id": 1,
      "name": "No Dummy",
      "artworkUrl": "default-album.jpg",
      "artistId": 1,
      "artist": {
        "id": 1,
        "name": "The Crash Test Dummies"
      }
    },
    {
      "id": 2,
      "name": "I React to State",
      "artworkUrl": "default-album.jpg",
      "artistId": 1,
      "artist": {
        "id": 1,
        "name": "The Crash Test Dummies"
      }
    }
  ]

  class AllAlbums extends React.Component{
    constructor(){
        super()
        this.state = {
          albums: []
        }
    }

    async componentDidMount() {
      try {
        const res = await axios.get('/api/albums');
        const albums = res.data;
        this.setState({ albums });
      } catch (err) {
        console.log('There was a problem making contact!');
      }
    }
    
    render(){
        return(
          <>
            <div id='albums' className='row wrap'>
              {this.state.albums.map(album =>{
                return(
                  <div className='album'>
                    <a>
                      <img src={album.artworkUrl} />
                      <p>{album.name}</p>
                      <small>{album.artist.name}</small>
                    </a>
                  </div>
                )
              })
              }
            </div>
        </>
        )
    }
}

  
export default AllAlbums