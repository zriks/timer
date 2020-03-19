import { compose, applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers";

const finalCreateStore = compose(applyMiddleware(logger))(createStore);
export default finalCreateStore(rootReducer);
