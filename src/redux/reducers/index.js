import { combineReducers } from "redux";
import { scheduleReducer } from "./scheduleReducer";

const rootReducer = () =>
    combineReducers({
        schedules: scheduleReducer
    });
export default rootReducer;
