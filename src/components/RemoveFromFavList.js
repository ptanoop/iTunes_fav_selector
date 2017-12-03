import React, { Component } from 'react';
import * as ituneActions from '../actions/ItuneActions.js';
import { connect } from 'react-redux';
var FontAwesome = require('react-fontawesome');


class RemoveFromFavList extends Component {

  removeFromFavouite(id){
    this.props.removeFromFavourites(id);
  }

  clickUpdate = e => {
      this.removeFromFavouite(this.props.trackId);
  };

  render() {
      let data = this.props;

      if(data === undefined || data.trackId === undefined){
          data= {
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
            <FontAwesome name='minus' />
          </button>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromFavourites: id => dispatch(ituneActions.removeFromFavourites(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFromFavList);;
