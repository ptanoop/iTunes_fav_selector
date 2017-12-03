import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItuneList            from '../components/ItuneList.js';
import FavList              from '../components/FavList.js';
import SearchMusic          from '../components/SearchMusic.js';
import '../styles/AppContainer.css';

class App extends Component {

  selectTab = (e) => {
    document.getElementById("myFavTab").style.backgroundColor='#ddd';
    document.getElementById("searchTab").style.backgroundColor='#ddd';
    document.getElementById("FavouriteItune").style.display = "none";
    document.getElementById("SearchItune").style.display = "none";
    if(e.target.id === 'myFavTab'){
      document.getElementById("FavouriteItune").style.display = "block";
    }
    else {
      document.getElementById("SearchItune").style.display = "block";
    }
    document.getElementById(e.target.id).style.backgroundColor='#aaa';
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">My Favourite Itunes</h1>
        </header>
        <div>
            <div className="tabHolder">
                <button className="tab" id="searchTab" onClick={this.selectTab}  style={{backgroundColor:'#aaa'}}>Search Itunes</button>
                <button className="tab" id="myFavTab" onClick={this.selectTab}>My Favourite Itunes</button>
            </div>
            <div id="SearchItune" className="tabcontent">
                <label>Search Itunes</label>
                <SearchMusic/>
                <ItuneList />
            </div>
            <div id="FavouriteItune" className="tabcontent" style={{display:'none'}}>
                <FavList />
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
