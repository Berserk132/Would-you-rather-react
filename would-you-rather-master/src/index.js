import React from 'react';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./reducers/";
import middleware from "./middlewares";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
