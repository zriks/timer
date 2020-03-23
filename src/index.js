import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import "./assets/scss/stype.scss";

import Router from "./router";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
