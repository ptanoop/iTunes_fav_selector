import React, { Component } from 'react'
import { connect } from 'react-redux';
import Itune from './Itune.js'

class ItuneList extends Component{

    render(){
      let data = this.props;
      if(data === undefined || data.searchResults === undefined){
          data= {
              searchResults : []
          }
      }

      var filteredSearch = data.searchResults.filter(function(item){
          return item.isFavourite === false;
      })

      return(
        <div>
          {filteredSearch.map((item, index) => <Itune key={index} ituneObj={item} />)}
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
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ItuneList);
