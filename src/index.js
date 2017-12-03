import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/AppContainer.js';
import './styles/index.css';
import './font-awesome/font-awesome.min.css';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import ituneReducers from './reducers/ituneReducers.js'

const configureStore = () => {
  return createStore(
    ituneReducers,
    applyMiddleware(axiosMiddleware(axios))
  );
}

let store = configureStore();

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
