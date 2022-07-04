import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

var rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  rootEl)

// if (module.hot) {
//   module.hot.accept('./App', function () {
//     var NextApp = require('./App')
//     ReactDOM.render(<NextApp />, rootEl)
//   })
// }
