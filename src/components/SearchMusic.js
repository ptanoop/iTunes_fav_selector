import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../actions/ItuneActions.js';
import '../styles/AppContainer.css';

class SearchMusic extends Component {
  state = {
    text: '',
  };

  submitText(input){
    this.props.searchAction(input);
  }

  onChange = e => {
    const { value: text } = e.target;
    this.setState({
      text,
    });
  };

  onKeyDown = e => {
    const { value } = e.target;
    if (e.which === 13) {
      this.submitText(value);
      this.setState({
        text: '',
      });
    }
  };

  render() {
    return (
        <div>
        <input
              className="searchInput"
              type="text"
              value={this.state.text}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              ref="searchStringInput" />
        </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchAction: text => dispatch(searchActions.searchAction(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMusic);
