import React, { Component } from 'react';
import '../styles/Itune.css';
import AddToFavList from './AddToFavList.js';
import RemoveFromFavList from './RemoveFromFavList.js';
var FontAwesome = require('react-fontawesome');

class Itune extends Component {

  updateFavListButton = function(data){
      if(data.isFavourite)
          return <RemoveFromFavList trackId = {data.trackId}/>
      else
          return <AddToFavList trackId = {data.trackId}/>
  }

  render() {
    let data = this.props;
    if(data === undefined || data.ituneObj === undefined){
        data= {
            artistName : '',
            artworkUrl100 : '',
            trackName : '',
        }
    }
    else{
        data = this.props.ituneObj;
    }

    return (
      <div className="ituneDiv" >
          <table className="ituneTable">
              <tbody>
              <tr>
                  <td className="ituneImageTabCol">
                    <img className="ituneArtwork100" alt="ArtWork" src={data.artworkUrl100}/>
                  </td>
                  <td className="ituneTextTabCol">
                    <label>{data.artistName}</label>
                    <br/>
                    <FontAwesome name='music' />&nbsp;
                    <label className="trackNameLabel">{data.trackName}</label>
                    <br/>
                    <label className="trackNameLabel">Collection Name : {data.collectionName}</label>
                  </td>
                  <td className="ituneActionTabCol">
                    {this.updateFavListButton(data)}
                  </td>
            </tr>
            </tbody>
          </table>

      </div>
    );
  }
}

export default Itune;
