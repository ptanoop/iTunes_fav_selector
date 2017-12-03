import React, { Component } from 'react';
import * as searchActions from '../actions/ItuneActions.js';
import { connect } from 'react-redux';
var FontAwesome = require('react-fontawesome');


class AddToFavList extends Component {

  addToFavouite(id){
    this.props.addToFavourites(id);
  }

  clickUpdate = e => {
      this.addToFavouite(this.props.trackId);
  };

  render() {
      let data = this.props;

      if(data === undefined || data.trackId === undefined){
          data = {
              trackId : ''
          }
      }
      else{
        data = this.props.trackId;
      }

      return(
          <button id={"button_"+data}
              onClick = {this.clickUpdate}
            >
            <FontAwesome name='plus' />
          </button>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourites: id => dispatch(searchActions.addToFavourites(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavList);;
