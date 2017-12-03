import React, { Component } from 'react'
import { connect }          from 'react-redux';
import Itune                from './Itune.js'

class FavList extends Component{
    render(){
      let data = this.props;
      if(data === undefined || data.searchResults === undefined){
          data= {
              favouriteList : []
          }
      }
      var filteredSearch = data.searchResults.filter(function(item){
          return item.isFavourite === true;
      })

      return(
          <div>
                {filteredSearch.map((item, index) => <Itune key={index+"_fav"} ituneObj={item} />)}
          </div>
      );
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.ituneReducers.searchResults
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //searchAction: text => dispatch(searchActions.searchAction(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
