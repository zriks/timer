import { compose, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import history from "../helper/history";

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
middlewares.push(thunk);

if (process.env.REACT_APP_ENV === "development") {
    middlewares.push(loggerMiddleware);
}
const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
